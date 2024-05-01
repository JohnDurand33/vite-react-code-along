/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import Product from './Product'
import {ProductProps} from './Product'
import './App.css'

type ProductArray = ProductProps['product'][]

function App() {

    const [products, getproducts] = useState<ProductArray>([])
    
    const getProducts = async () => {
        const url = 'https://api.store.com/v1/products'
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.STRIPE_API_KEY}`
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        console.log(res.status)
        if (res.status === 200) {
            getproducts(data)
        }
        
    }
    
    useEffect(()=>{ getProducts() }, [])

    const showProducts =() => {
        return products.map((p) => <Product key={p.id} product={p} />)
    }

    return (
        <div>
            <h1>My Shop</h1>
            {showProducts()}
        </div>
    )
}

export default App
