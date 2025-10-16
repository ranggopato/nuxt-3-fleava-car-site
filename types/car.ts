export interface UnsplashPhoto {
    id: string
    alt_description: string | null
    urls: {
        small: string
        regular: string
    }
    description: string
    user: {
        name: string
    }
}

export interface CarCard {
    id: string
    title: string
    text: string
    image: string
    description: string
}