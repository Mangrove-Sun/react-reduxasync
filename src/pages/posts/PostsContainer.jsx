import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../modules/posts';
import PostPresenter from './PostPresenter';

function PostsContainer() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.posts)

  useEffect(() => {
    // 다른 페이지를 갔다 왔을 경우 data를 재 요청하므로 data가 비었을 경우에만 동작하도록 작성
    !data && dispatch(getPosts())
  }, [data, dispatch])

  if (loading) return <p>로딩중..</p>
  if (error) return <div>에러 발생</div>
  if (!data) return null
  return (
    <PostPresenter posts={data}/>
  )
}

export default PostsContainer