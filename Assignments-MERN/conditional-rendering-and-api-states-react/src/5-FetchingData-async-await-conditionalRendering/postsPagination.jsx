
import { useEffect, useState } from "react";
import Button from "../components/Button";

const PostsPagination = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  cosnt [page,setPage]=useState(1);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
      );
      if (!response.ok) {
        throw new Error("Error occured in loading ....");
      }
      const data = await response.json();
      if (data) {
        setPosts(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchPosts();
    console.log("Reloaded...");
  }, [reload]);

  if (error) {
    return <p style={{ color: "red" }}>Error...{error}</p>;
  }

  if (loading) return <p>Loading...</p>;

  if (posts.length === 0) return <p>Posts are empty</p>;

const handleReload=()=>{
  setLoading(true);
  setReload(!reload);
}

  return(<>
  <Button onClick={handleReload}>Reload</Button>
   {posts.map((p) => (
    
    <article key={p.id}>
      {p.title}
      <br />
      {p.body}
      <hr />
    </article>
  ))}
  </>
  );
};

export default PostsPagination;
