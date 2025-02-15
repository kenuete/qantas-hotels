import { Hotel } from '../types/index'

export const getPrice = (result: Hotel) => result?.offer?.displayPrice?.amount

// const sortResultBy
export const sortResults = <T>(
  results: T[],
  order: 'asc' | 'dsc' = 'asc',
  getSortItem: (result: T) => number | undefined | null
) => {
  return results.sort((a, b) => {
    const itemA = getSortItem(a) ?? null
    const itemB = getSortItem(b) ?? null

    if (itemA === null && itemB === null) return 0
    if (itemA === null) return 1
    if (itemB === null) return -1
    return order === 'asc' ? itemA - itemB : itemB - itemA
  })
}
