export type HotelResults = {
  hotels: Hotel[]
}

export type Hotel = {
  id: string
  property: Property
  offer: Offer
}

export type Property = {
  propertyId: string
  title: string
  address: string[]
  previewImage: Image
  rating: Rating
}

export type Image = {
  url: string
  caption: string
  imageType: string
}

export type Rating = {
  ratingValue: number
  ratingType: string
}

type Offer = {
  promotion: Promotion
  name: string
  displayPrice: Price
  savings: Price | null
  cancellationOption: CancellationOption
}

type Promotion = {
  title: string
  type: string
}

type Price = {
  amount: number
  currency: string
}

type CancellationOption = {
  cancellationType: string
}
