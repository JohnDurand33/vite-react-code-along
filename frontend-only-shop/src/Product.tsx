import React from 'react'

export interface ProductProps {
    product: {
        id: string
        name: string
        price: number
    }
}

const Product: React.FC<ProductProps> = ({ product }) => {
    
    return (
        <div>
            <h1>{product.id}</h1>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
}

export default Product