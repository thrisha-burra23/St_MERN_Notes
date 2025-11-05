import { useState } from "react";
import PostList from "./PostList";

const PostContainer=()=>{
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([{
        id:1,
        msg:"hai",    
    },
    {
        id:2,
        msg:"hello",
    },
    // {
    //     id:3,
    //     msg:"wellcome"
    // }
    ])



  function handleRetry()
  {
    setError(false);
    setLoading(true);
  }

  return(
    <PostList  posts={posts} error={error} loading={loading}  onRetry={handleRetry}/>
  )

}

export default PostContainer;