import axios from "axios";
import { Post } from "../app/type";

export default async function getLatestPosts(count: number): Promise<Post[]> {
    const res = await axios.get(`${process.env.WP_URL}/wp-json/wp/v2/posts?_embed&per_page=${count}&orderby=date`);
    const postData = res.data;
    console.log(postData)

    const latestPosts: Post[] = postData.map((post: any) => {
        const title = post.title.rendered;
        const content = post.content.rendered;
        const date = post.date;
        const categories = post.categories;
        const slug = post.slug;
        const tags = post.tags
        const acfFields = post.acf

        return {
            title,
            content,
            date,
            categories,
            slug,
            tags,
            acfFields
        } as Post;
    });

    return latestPosts;
}
