import axios from "axios";
import { Post } from "../app/type";

export default async function getPostData(prop: string) {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?slug=${prop}`);
    const postData = res.data[0];
    const title = postData.title.rendered;
    const content = postData.content.rendered;
    const date = postData.date;
    const categories = postData.categories;
    const slug = postData.slug
    const acfFields = postData.acf

    const post: Post = {
        title, content, date, categories, slug, acfFields
    }

    return post as Post;
}
