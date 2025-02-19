import { sortResults, getPrice, getSortOrder, getSortFn, type SortTypes } from '../sort'
import { Hotel } from '../../types'

const mockHotel1: Hotel = {
  id: '12345',
  property: {
    propertyId: 'P107802',
    title: 'Primus Hotel Sydney',
    address: ['339 Pitt St', 'Sydney'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Primus Hotel Sydney',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 5,
      ratingType: 'self',
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe King',
    displayPrice: {
      amount: 375,
      currency: 'AUD',
    },
    savings: {
      amount: 28,
      currency: 'AUD',
    },
    cancellationOption: {
      cancellationType: 'FREE_CANCELLATION',
    },
  },
}

const mockHotel2: Hotel = {
  id: '7890',
  property: {
    propertyId: 'P107802',
    title: 'Primus Hotel Sydney',
    address: ['339 Pitt St', 'Sydney'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Primus Hotel Sydney',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 5,
      ratingType: 'self',
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe King',
    displayPrice: {
      amount: 500,
      currency: 'AUD',
    },
    savings: {
      amount: 28,
      currency: 'AUD',
    },
    cancellationOption: {
      cancellationType: 'FREE_CANCELLATION',
    },
  },
}

const mockHotel3: Hotel = {
  id: 'abcdef',
  property: {
    propertyId: 'P107802',
    title: 'Primus Hotel Sydney',
    address: ['339 Pitt St', 'Sydney'],
    previewImage: {
      url: 'https://unsplash.it/145/125/?random',
      caption: 'Image of Primus Hotel Sydney',
      imageType: 'PRIMARY',
    },
    rating: {
      ratingValue: 5,
      ratingType: 'self',
    },
  },
  offer: {
    promotion: {
      title: 'Exclusive Deal',
      type: 'MEMBER',
    },
    name: 'Deluxe King',
    displayPrice: {
      amount: null,
      currency: 'AUD',
    },
    savings: {
      amount: 28,
      currency: 'AUD',
    },
    cancellationOption: {
      cancellationType: 'FREE_CANCELLATION',
    },
  },
}

describe('sortResults', () => {
  it('should sort hotel results in asc order', () => {
    const sortedResults = sortResults({
      results: [mockHotel2, mockHotel1],
      order: 'asc',
      getSortItem: getPrice,
    })

    expect(sortedResults).toEqual([mockHotel1, mockHotel2])
  })

  it('should sort hotel results in dsc order', () => {
    const sortedResults = sortResults({
      results: [mockHotel1, mockHotel2],
      order: 'dsc',
      getSortItem: getPrice,
    })

    expect(sortedResults).toEqual([mockHotel2, mockHotel1])
  })

  it('should put the item with no display price to the last when dsc', () => {
    const sortedResults = sortResults({
      results: [mockHotel3, mockHotel1, mockHotel2],
      order: 'dsc',
      getSortItem: getPrice,
    })
    expect(sortedResults).toEqual([mockHotel2, mockHotel1, mockHotel3])
  })

  it('should put the item with no display price to the last when asc', () => {
    const sortedResults = sortResults({
      results: [mockHotel3, mockHotel1, mockHotel2],
      order: 'asc',
      getSortItem: getPrice,
    })
    expect(sortedResults).toEqual([mockHotel1, mockHotel2, mockHotel3])
  })    
})


describe('getSortOrder', () => {
  it('should return "dsc" when sortBy includes "high-low"', () => {
    const sortBy: SortTypes = 'price-high-low'
    expect(getSortOrder(sortBy)).toBe('dsc')
  })

  it('should return "asc" when sortBy does not include "high-low"', () => {
    const sortBy: SortTypes = 'price-low-high'
    expect(getSortOrder(sortBy)).toBe('asc')
  })
})

describe('getSortFn', () => {
  it('should return getPrice function for "price-high-low"', () => {
    const sortFn = getSortFn('price-high-low')
    expect(sortFn).toBe(getPrice)
  })

  it('should return getPrice function for "price-low-high"', () => {
    const sortFn = getSortFn('price-low-high')
    expect(sortFn).toBe(getPrice)
  })
})
