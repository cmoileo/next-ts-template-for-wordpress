import axios from "axios";

export default async function getProducts(index: number) {
    try {
        const apiSecret = process.env.WP_WOOCOMERCE_CLIENT_SECRET_KEY
        const apiKey = process.env.WP_WOOCOMERCE_SECRET_KEY
        const res = await axios.get(`${process.env.WP_URL}/wp-json/wc/v3/products?per_page=${index}`, {
            headers: {
                Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`,
            }
        })
        const resData = res.data
        return resData
    } catch (error) {
        return error
    }
}
