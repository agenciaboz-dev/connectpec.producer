// import { useMemo } from "react"
// import get from "lodash/get"

// export interface IUseArrayControllerOptions<T> {
//     search?: {
//         searchContent: string // conteudo da pesquisa que será usado para filtrar os resultados dentro do array
//         searchParams: (keyof T)[] // tipos de dados que podem ser pesquisados nos items do array ex:( [item.name, item.data, ...])
//         // searchParams: (keyof T)[] // tipos de dados que podem ser pesquisados nos items do array ex:( [item.name, item.data, ...])
//     }

//     sort?: {
//         sortOrder: 1 | -1 // usado para definir o tipo de ordenação, sendo 1 para ordem crescente, -1 para ordem decrescente
//         sortParams: (keyof T)[] // tipos de dados que podem ser usados para ordenar o array ex:( [item.name, item.data, ...])
//     }

//     filters?: Partial<Record<keyof T, T[keyof T][] | T[keyof T]>> // tipos de filtros que podem ser aplicados no array, sendo que deve ser especificado a chave e o valor do filtro ex:( [resultado: aprovado , pagamento: pago ...])
// }

// export function useArrayController<T>(initialArray: T[], options?: IUseArrayControllerOptions<T>) {
//     const array = useMemo(() => {
//         let result = [...initialArray]

//         // Search functionality
//         if (options?.search?.searchContent) {
//             const searchContentLower = options.search.searchContent.toLowerCase()
//             result = result.filter((item) =>
//                 options.search!.searchParams.some((param) => {
//                     const value = get(item, param)
//                     return value && value.toString().toLowerCase().includes(searchContentLower)
//                 })
//             )
//         }

//         // Sorting functionality
//         if (options?.sort) {
//             const { sortOrder, sortParams } = options.sort
//             result.sort((a, b) => {
//                 for (const param of sortParams) {
//                     // const valueA = a[param]
//                     // const valueB = b[param]
//                     const valueA = get(a, param)
//                     const valueB = get(b, param)

//                     if (valueA == null || valueB == null) continue

//                     let comparison = 0

//                     if (typeof valueA === "number" && typeof valueB === "number") {
//                         comparison = valueA - valueB
//                     } else if (valueA instanceof Date && valueB instanceof Date) {
//                         comparison = valueA.getTime() - valueB.getTime()
//                     } else if (typeof valueA === "string" && typeof valueB === "string") {
//                         const dateA = new Date(valueA)
//                         const dateB = new Date(valueB)
//                         if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
//                             // Both strings are valid dates
//                             comparison = dateA.getTime() - dateB.getTime()
//                         } else {
//                             // Compare as strings
//                             comparison = valueA.localeCompare(valueB)
//                         }
//                     } else {
//                         comparison = valueA.toString().localeCompare(valueB.toString())
//                     }

//                     if (comparison !== 0) {
//                         return comparison * sortOrder
//                     }
//                 }
//                 return 0
//             })
//         }

//         // Filtering functionality
//         if (options?.filters) {
//             result = result.filter((item) => {
//                 for (const key in options.filters) {
//                     const filterValue = options.filters[key as keyof T]
//                     // const itemValue = item[key as keyof T]
//                     const itemValue = get(item, key)

//                     if (filterValue === undefined) {
//                         continue
//                     }

//                     if (Array.isArray(filterValue)) {
//                         if (!filterValue.includes(itemValue)) {
//                             return false
//                         }
//                     } else {
//                         if (itemValue !== filterValue) {
//                             return false
//                         }
//                     }
//                 }
//                 return true
//             })
//         }

//         return result
//     }, [initialArray, options])

//     return {
//         array,
//     }
// }

import { useCallback } from "react"
import get from "lodash/get"

export interface IUseArrayControllerOptions<T> {
    search?: {
        searchContent: string
        searchParams: (keyof T)[]
    }

    sort?: {
        sortOrder: 1 | -1
        sortParams: (keyof T)[]
    }

    filters?: Partial<Record<keyof T, T[keyof T][] | T[keyof T]>>
}

export function useArrayController<T>(initialArray: T[], options?: IUseArrayControllerOptions<T>) {
    const handleArrayController = useCallback(() => {
        let result = [...initialArray]

        // Search functionality
        if (options?.search?.searchContent) {
            const searchContentLower = options.search.searchContent.toLowerCase()
            result = result.filter((item) =>
                options.search!.searchParams.some((param) => {
                    const value = get(item, param)
                    return value && value.toString().toLowerCase().includes(searchContentLower)
                })
            )
        }

        // Sorting functionality
        if (options?.sort) {
            const { sortOrder, sortParams } = options.sort
            result.sort((a, b) => {
                for (const param of sortParams) {
                    const valueA = get(a, param)
                    const valueB = get(b, param)

                    if (valueA == null || valueB == null) continue

                    let comparison = 0

                    if (typeof valueA === "number" && typeof valueB === "number") {
                        comparison = valueA - valueB
                    } else if (valueA instanceof Date && valueB instanceof Date) {
                        comparison = valueA.getTime() - valueB.getTime()
                    } else if (typeof valueA === "string" && typeof valueB === "string") {
                        const dateA = new Date(valueA)
                        const dateB = new Date(valueB)
                        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
                            // Both strings are valid dates
                            comparison = dateA.getTime() - dateB.getTime()
                        } else {
                            // Compare as strings
                            comparison = valueA.localeCompare(valueB)
                        }
                    } else {
                        comparison = valueA.toString().localeCompare(valueB.toString())
                    }

                    if (comparison !== 0) {
                        return comparison * sortOrder
                    }
                }
                return 0
            })
        }

        // Filtering functionality
        if (options?.filters) {
            result = result.filter((item) => {
                for (const key in options.filters) {
                    const filterValue = options.filters[key as keyof T]
                    const itemValue = get(item, key)

                    if (filterValue === undefined) {
                        continue
                    }

                    if (Array.isArray(filterValue)) {
                        if (!filterValue.includes(itemValue)) {
                            return false
                        }
                    } else {
                        if (itemValue !== filterValue) {
                            return false
                        }
                    }
                }
                return true
            })
        }

        return result
    }, [initialArray, options])

    return {
        handleArrayController,
    }
}
