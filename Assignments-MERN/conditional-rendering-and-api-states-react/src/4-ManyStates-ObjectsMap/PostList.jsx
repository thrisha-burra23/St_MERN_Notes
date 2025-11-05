import Button from "../components/Button";
import EmptyState from "./EmptyState";

const PostList = ({ posts, loading, error, onRetry }) => {
  // if an error occurred, show it and stop rendering further
  if (error)
    return (
      <>
        {loading ? "loading..." : "error Occured"}
        <Button onClick={onRetry}>Retry</Button>
      </>
    );

  // if still loading, show a loading UI and stop here
  if (loading) return <p>Loading...</p>;

  // if we have no posts, communicate empty state
  if (!posts || posts.length === 0)
    return <EmptyState message="Posts are empty!!" />;

  if (posts.length < 3)
    return (
      <div>
        {posts.map((p) => (
          <article key={p.id}>{p.msg}</article>
        ))}
        <p>Loading.....</p>
      </div>
    );

  // otherwise render the list
  return posts.map((p) => <article key={p.id}>{p.msg}</article>);
};

export default PostList;
