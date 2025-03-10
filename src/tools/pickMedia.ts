import * as ImagePicker from "expo-image-picker"
import { ios } from "./platforms"

export const pickMedia = async (
    aspect?: [number, number],
    multiple?: boolean,
    mediaTypes: ImagePicker.MediaTypeOptions = ImagePicker.MediaTypeOptions.Images
) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: mediaTypes,
        allowsEditing: ios ? false : !multiple,
        aspect,
        quality: 1,
        base64: true,
        allowsMultipleSelection: multiple,
    })

    return result.assets ? result.assets : null
}

export const getFilename = (media: ImagePicker.ImagePickerAsset) => media?.uri.substring(media?.uri.lastIndexOf("/") + 1, media?.uri.length) || ""