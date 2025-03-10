export type Filter<T> = Partial<Record<keyof T, T[keyof T] | T[keyof T][]>>

export type FilterFields = {
    active: boolean
    email: string
    // Outras propriedades conforme necessário
}
