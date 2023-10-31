import React from 'react'
import getProducts from '@/src/hooks/getProducts'
import { Product } from '../type'
import Link from 'next/link'

export default async function page() {
  const products = await getProducts(3)
  return (
    <div>
        <h2>Our products</h2>
        <ul>
        {products.map((product: Product, index: number) => (
            <li key={index}>
            <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
            </li>
        ))}
        </ul>
    </div>
  )
}
