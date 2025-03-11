import { useLinkTo } from "@react-navigation/native"
import React, { useEffect } from "react"

interface RedirectProps {
    link?: string
}

export const Redirect: React.FC<RedirectProps> = ({ link = "/" }) => {
    const linkTo = useLinkTo()

    useEffect(() => {
        setTimeout(() => linkTo(link), 100)
    }, [])

    return null
}
