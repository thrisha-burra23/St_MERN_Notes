import { useState, useEffect } from "react";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      console.log("inside try");
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error(" Failed to load");
      }
      const data = await  response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{fetchPosts()}, []);

  if (error) {
    return <div className="text-red">Error{error}</div>;
  }

  if (loading) {
    return <p>Posts are loading...</p>;
  }

  if (posts.length === 0) {
    return <p>No Posts found...</p>;
  }

  return (
    <div>
      <h1 className="text-center text-red-700 text-[28px] italic font-bold">Posts</h1>
      {posts.map((post, index) => (
        <article className=" bg-white 
          border border-gray-300 
          rounded-lg 
          shadow-lg 
          hover:shadow-2xl 
          transition-shadow 
          duration-300 
          p-6 
          m-4" key={index || post.id}>
          <h3 className="text-pink-500 font-semibold text-lg">{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Posts;
