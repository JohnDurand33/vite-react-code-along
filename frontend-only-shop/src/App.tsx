import { useState } from 'react'
import Product from './Product'
import {ProductProps} from './Product'
import './App.css'

type ProductArray = ProductProps['product'][]

function App() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [products, ] = useState<ProductArray>([])

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const showProducts = async () => {
        return products.map((p) => <Product key={p.id} product={p} />)
    }

    return (
        <div>

        </div>
    )
}

export default App
