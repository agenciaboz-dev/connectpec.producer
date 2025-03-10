import _ from "lodash"

export function getDifference<T extends object>(obj1: T, obj2: any): Partial<T> {
    console.log({ obj1, obj2 })
    const result: Partial<T> = {}
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)] as Array<keyof T>)

    keys.forEach((key) => {
        const val1 = obj1[key]
        const val2 = obj2[key]

        if (_.isObject(val1) && _.isObject(val2)) {
            const differences = getDifference(val1 as any, val2 as any)
            if (!_.isEmpty(differences)) {
                // Only add if there are differences
                result[key] = differences as any
            }
        } else if (!_.isEqual(val1, val2)) {
            result[key] = val2
        }
    })

    console.log({ result })

    return result
}
