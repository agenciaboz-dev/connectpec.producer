export const create_skeleton_array = (total: number): string[] => {
    return new Array(total).fill(0).map((_, index) => `index_${index + 1}`)
}
