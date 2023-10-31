import React from 'react'
import getProducts from '@/src/hooks/getProducts'

export default async function page() {
  const products = await getProducts(3)
  console.log(products)
  return (
    <div>page</div>
  )
}
