/*how to add more sorting*/
/* 1. Add SortTypes */
/* 2. Add Getter functions to select the target property for sorting */
/* 3. Add switch cases in getSortFn */

import { Hotel } from '../types/index'

export type SortTypes = 'price-high-low' | 'price-low-high'

// Just create more getter functions as you add more sorting requirements
export const getPrice = (result: Hotel) => result?.offer?.displayPrice?.amount

interface SortResults<T> {
    results: T[]
    order?: "asc" | "dsc"
    getSortItem: (result: T) => number | undefined | null;
}

// made it as reusable function to extend for future sorting requirements.
// you dont need to update this function again.
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
    return sortBy.includes('high-low') ? 'dsc': 'asc'
}