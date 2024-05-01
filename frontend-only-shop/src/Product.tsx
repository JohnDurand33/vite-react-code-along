import React from 'react'
import { ProductType } from './types'

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = ({ product }) => {
    
    return (
        <div>
            hi
        </div>
    )
}

export default Product