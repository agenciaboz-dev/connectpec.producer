import React, { Dispatch, SetStateAction } from "react"
import { View } from "react-native"
import { Icon, IconButton, Text } from "react-native-paper"
import { mobile, web } from "../tools/platforms"
import { colors } from "../style/colors"
import { scale } from "../tools/scale"

interface TitleWithCloseProps {
    onDismiss: () => void
    setOpenSettingsModal?: Dispatch<SetStateAction<boolean>>
    title: string
    complement?: string
    small_title?: boolean
}

export const TitleWithClose: React.FC<TitleWithCloseProps> = ({ onDismiss, setOpenSettingsModal, title, complement, small_title }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: mobile ? undefined : "110%",
            }}
        >
            <View style={[{ flexDirection: mobile ? "column" : "row", alignItems: mobile ? undefined : "center", gap: scale(10) }]}>
                <Text
                    style={[{ fontSize: mobile ? 28 : 22, lineHeight: mobile ? 36 : 28, color: colors.grey }, small_title && { fontSize: scale(16) }]}
                >
                    {title}
                </Text>
                {!!complement && (
                    <>
                        {web ? <Icon size={scale(25)} source={"arrow-right"} /> : null}
                        <Text
                            style={{
                                fontSize: mobile ? 28 : 22,
                                lineHeight: mobile ? 36 : 28,
                                color: colors.primary,
                                marginLeft: mobile ? 25 : undefined,
                            }}
                        >
                            {complement}
                        </Text>
                    </>
                )}
            </View>
            {!small_title &&
                (web ? (
                    <IconButton
                        icon="close"
                        size={scale(40)}
                        onPress={() => {
                            onDismiss()
                        }}
                    />
                ) : (
                    <IconButton
                        mode="contained"
                        containerColor={colors.primary}
                        iconColor="white"
                        icon={"cog"}
                        onPress={() => setOpenSettingsModal && setOpenSettingsModal(true)}
                    />
                ))}
        </View>
    )
}
