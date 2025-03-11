import React from "react"
import { View } from "react-native"
import { web } from "../../tools/platforms"
import SkeletonPlaceholder from "../Screens/SystemChooser/SkeletonPlaceholderWrapper"
import { colors } from "../../style/colors"
import ContentLoader, { Rect } from "react-content-loader/native"

interface UniversalSkeletonProps {
    height: number
    width?: number
    ellipse?: boolean
}

export const UniversalSkeleton: React.FC<UniversalSkeletonProps> = ({ height, width, ellipse = false }) => {
    return web ? (
        <ContentLoader
            backgroundColor={colors.disabled}
            foregroundColor={colors.skeleton}
            viewBox={`0 0 1500 ${height}`}
            style={{ borderRadius: ellipse ? 50 : 5 }}
        >
            <Rect x="0" y="0" width={width || "100%"} height={height} />
        </ContentLoader>
    ) : (
        <View style={[{}]}>
            {/* @ts-ignore */}
            <SkeletonPlaceholder borderRadius={5} backgroundColor={colors.skeleton}>
                {/* @ts-ignore */}
                <SkeletonPlaceholder.Item height={height} width={width} />
            </SkeletonPlaceholder>
        </View>
    )
}
