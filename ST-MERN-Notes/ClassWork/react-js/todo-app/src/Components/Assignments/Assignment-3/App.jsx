// import { useEffect } from "react";
import PostList from "./PostList";
// import EmptyState from "./EmptyState";
import { useEffect, useState } from "react";

function App() {
  const [error,setError] =useState(false);
  const [loading,setLoading]=useState(false);
  const [posts,setPosts]=useState([]);

  useEffect(() => {
    setPosts([{ name: "sai", age: 21 },
      { name: "praneeth", age: 21 }]);
  }, []);
  return (
    <>
      <PostList error={error}  loading={loading}  posts={posts}/>
    </>
  );
}
export default App;
