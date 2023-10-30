import axios from "axios";

export default async function getAcfPageFields(slug: string) {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/pages?slug="${slug}"`);
    const fields = res.data[0].acf
    return fields
}