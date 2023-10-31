import React from 'react'
import { Product } from '../../type'
import getProduct from '@/src/hooks/getProduct'

export default async function page({ params }: { params: { slug: string }}) {
    const product: Product | string = await getProduct(params.slug)

    if (typeof product === 'string') {
        return (
            <div>
                <p>Error: {product}</p>
            </div>
        );
    }

  return (
    <div>
        <h2>{product.name}</h2>
    </div>
  )
}
