import PostHeader from "../molecules/post-card/PostHeader.jsx" 
import PostContent from "../molecules/post-card/PostContent.jsx" 
import PostActionButton from "../molecules/post-card/PostActionButton.jsx"
import PostCaption from "../molecules/post-card/PostCaption.jsx"
import PostCommentsListing from "../molecules/post-card/PostCommentsListing.jsx"
import PostCommentCreator from "../molecules/post-card/PostCommentCreator.jsx"

const PostCard = () => {
  return (
    <article className="flex flex-col w-[400px] bg-pink-400">
      <PostHeader />
      <PostContent/>
      <PostActionButton />
      <PostCaption/>
      <PostCommentsListing/>
      <PostCommentCreator/>
    </article>
  )
}

export default PostCard