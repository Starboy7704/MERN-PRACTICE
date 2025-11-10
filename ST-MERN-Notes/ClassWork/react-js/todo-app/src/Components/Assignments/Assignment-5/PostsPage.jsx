import { useEffect, useState } from "react";

function PostsPage() {
  // store results
  const [posts, setPosts] = useState([]);
  // track loading visual
  const [loading, setLoad] = useState(true);
  // track error messages
  const [error, setError] = useState("");
  //for reload
  const [reloadKey,setReloadKey] = useState(true);
  //for Pagenation
  const [pageNumber,setPageNumber] = useState(1);

  useEffect(() => {
    // named async function instead of an IIFE
    async function loadPosts() {
      try {
        setLoad(true);
        setError("");
        const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${pageNumber}&_limit=5`);
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data); // keep it small for demo
      } catch (e) {
        setError(e.message);
      } finally {
        setLoad(false);
        // setReloadKey(false);
      }
    }

    // call the named function
    // if(reloadKey==true)
    loadPosts();
  }, [reloadKey , pageNumber]); // run once on mount

  // early return branches
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (loading) return <p>Loading...</p>;
  if (posts.length === 0) return <p>No posts.</p>;

  // success branch
  return (
    <>
    <button className="bg-red-500 rounded-2xl p-1.5 text-white" onClick={() => setReloadKey(prev => !prev) }>refresh</button>
      {posts.map((p) => (
        <div key={p.id}>
          <article>{p.email}</article>
          <article>{p.username}</article>
        </div>
      ))}
      <button className="bg-orange-500 rounded-2xl p-1.5 text-white"
      onClick={()=> setPageNumber(prev => prev-1)}
      disabled={loading || pageNumber===1}
       >Previous</button>
      <button className="bg-orange-500 rounded-2xl p-1.5 text-white"
      onClick={()=> setPageNumber(prev => prev+1 )}
      disabled={loading}
      >Next</button>
    </>
  );
}

export default PostsPage;
