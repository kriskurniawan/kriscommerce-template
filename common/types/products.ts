export interface IProduct {
    id: number
    name: string
    price: number
    image: string
    category: string
    description: string
    rating: number
    featured: boolean
}

export interface ProductItemProps {
    product: IProduct[]
}