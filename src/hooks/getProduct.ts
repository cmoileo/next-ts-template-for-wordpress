import axios from "axios"
import { Product } from "../app/type"

export default async function getProduct(prop: string) {
    try {
        const apiSecret = process.env.WP_WOOCOMERCE_CLIENT_SECRET_KEY
        const apiKey = process.env.WP_WOOCOMERCE_SECRET_KEY
        const product = await axios.get(`${process.env.WP_URL}/wp-json/wc/v3/products?slug=${prop}`, {
            headers: {
                Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
            }
        })
        const productData: Product = product.data[0]
        return productData
    } catch (error) {
        return `An error has occured: ${error}`
    }
}