import axios from "axios";
import { Post } from "../app/type";

export default async function getPostData(slug: string) {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?slug=${slug}`);
    const postData = res.data[0];
    const title = postData.title.rendered;
    const content = postData.content.rendered;
    const date = postData.date;
    const categories = postData.categories;

    const post: Post = {
        title, content, date, categories
    }

    return post as Post;
}
