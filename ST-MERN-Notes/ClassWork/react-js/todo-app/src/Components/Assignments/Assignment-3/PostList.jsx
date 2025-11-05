import EmptyState from './EmptyState'
import Partial from './Partial';

function PostList({ posts, loading, error }) {
  
  // if an error occurred, show it and stop rendering further
  if (error)
    return (
      <>
        <p style={{ color: "red" }}>Error: {error}</p>
        <button className="font-bold text-red-50">Retry</button>
      </>
    );

  // if still loading, show a loading UI and stop here
  if (loading) return <p>Loading...</p>;

  // if we have no posts, communicate empty state
  if (!posts || posts.length === 0) return <EmptyState error={error} loading={loading}/>

  if (posts.length <= 3) {
    return (
      <div>
        <p style={{ color: "orange" }}>Partial data: only {posts.length} posts.</p>
        {posts.map((element, i) => (
          <article key={i}>
            <h2>{element.name}</h2>
            <p>Age: {element.age}</p>
          </article>
        ))}
      </div>
    );
  }
  // otherwise render the list
  return posts.map((p) => <article key={p.id}>{p.title}</article>);
}
export default PostList;
