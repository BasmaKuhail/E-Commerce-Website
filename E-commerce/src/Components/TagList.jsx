import { useState, useEffect } from "react";

export default function useFetchTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("http://localhost:8080/api/tags")
      .then(res => res.json())
      .then(json => setTags(json.content))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(tags)

  return { tags, loading, error };
}