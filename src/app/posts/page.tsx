import React from 'react'
import getLatestPosts from '@/src/hooks/getLatestsPost'
import Link from 'next/link'

export default async function page() {
  const latestPosts = await getLatestPosts(3)

  return (
    <div>
    <h2>Derniers articles</h2>
    <ul>
      {latestPosts.map((post, index) => (
        <li key={index}>
          <Link href={`/posts/${post.slug}`}><h3>{post.title}</h3></Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
