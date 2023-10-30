import getPostData from '../../../hooks/getPost';
import { Post } from '../../type';

export default async function page({ params }: { params: { slug: string }}) {
  const postData: Post = await getPostData(params.slug);

  const title = postData.title;
  const content = postData.content;
  const date = postData.date;
  const categories = postData.categories;

  console.log(date);
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}></div>
    </article>
  );
}