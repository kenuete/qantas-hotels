import { Hotel } from '../types/index'

export type SortTypes = 'price-high-low' | 'price-low-high'

export const getPrice = (result: Hotel) => result?.offer?.displayPrice?.amount

interface SortResults<T> {
    results: T[]
    order?: "asc" | "dsc"
    getSortItem: (result: T) => number | undefined | null;
}

export const sortResults = <T>({
  results,
  order,
  getSortItem
}: SortResults<T>) => {
  const R = results.sort((a, b) => {
    const itemA = getSortItem(a) ?? null
    const itemB = getSortItem(b) ?? null

    if (itemA === null && itemB === null) return 0
    if (itemA === null) return 1
    if (itemB === null) return -1
    return order === 'asc' ? itemA - itemB : itemB - itemA
  })
  console.log('R', R)
  return R
}

export const getSortFn = (sortBy: SortTypes) => {
    switch(sortBy) {
        case 'price-low-high': 
        case 'price-high-low': return getPrice
    }
}

export const getSortOrder = (sortBy: SortTypes) => {
    console.log('sortBy', sortBy)
    return sortBy.includes('high-low') ? 'dsc': 'asc'
}