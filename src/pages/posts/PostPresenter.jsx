import React from 'react'

function PostPresenter({posts}) {
  return (
    <div>
      {posts.map(post => (
        <p>{post.title}</p>
      ))}
    </div>
  )
}

export default PostPresenter