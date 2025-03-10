import { useCallback, useMemo, useState } from "react"
import get from "lodash/get"

export interface ArrayControllerBag<T> {
    setSearchOptions: React.Dispatch<
        React.SetStateAction<
            | {
                  searchContent: string
                  //   searchParams: (keyof T)[]
                  searchParams: string[]
              }
            | undefined
        >
    >

    setSortOptions: React.Dispatch<
        React.SetStateAction<
            | {
                  sortOrder: 1 | -1
                  //   sortParams: (keyof T)[]
                  sortParams: string[]
              }
            | undefined
        >
    >

    setFiltersOptions: React.Dispatch<React.SetStateAction<Partial<Record<keyof T, T[keyof T] | T[keyof T][]>> | undefined>>

    filtersOptions: Partial<Record<keyof T, T[keyof T] | T[keyof T][]>> | undefined

    manipulatedArray: T[]
}

export interface IUseArrayControllerOptions2<T> {
    initialArray: T[]
}

export function useArrayController2<T>({ initialArray }: IUseArrayControllerOptions2<T>): ArrayControllerBag<T> {
    const [searchOptions, setSearchOptions] = useState<
        | {
              searchContent: string
              //   searchParams: (keyof T)[]
              searchParams: string[]
          }
        | undefined
    >()

    const [sortOptions, setSortOptions] = useState<
        | {
              sortOrder: 1 | -1
              //   sortParams: (keyof T)[]
              sortParams: string[]
          }
        | undefined
    >()

    const [filtersOptions, setFiltersOptions] = useState<Partial<Record<keyof T, T[keyof T][] | T[keyof T]>>>()

    const manipulatedArray = useMemo(() => {
        let result = [...initialArray]

        // Search functionality
        if (searchOptions?.searchContent) {
            const searchContentLower = searchOptions.searchContent.toLowerCase()
            result = result.filter((item) =>
                searchOptions!.searchParams.some((param) => {
                    const value = get(item, param)
                    return value && value.toString().toLowerCase().includes(searchContentLower)
                })
            )
        }

        // Sorting functionality
        if (sortOptions) {
            const { sortOrder, sortParams } = sortOptions
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
        if (filtersOptions) {
            result = result.filter((item) => {
                for (const key in filtersOptions) {
                    const filterValue = filtersOptions[key as keyof T]
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
    }, [initialArray, searchOptions, sortOptions, filtersOptions])

    return {
        manipulatedArray,
        setSearchOptions,
        setSortOptions,
        setFiltersOptions,
        filtersOptions,
    }
}
