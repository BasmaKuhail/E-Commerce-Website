import { useState, useEffect } from "react";

export default function useFetchCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch("http://localhost:8080/api/categories")
      .then(res => res.json())
      .then(json => setCategories(json.content))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(categories)

  return { categories, loading, error };
}