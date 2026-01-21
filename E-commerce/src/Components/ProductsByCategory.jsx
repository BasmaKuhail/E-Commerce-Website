import { useState, useEffect } from "react";

export default function useFetchData(categoryId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch(`http://localhost:8080/api/productsByCategory/${categoryId}`)
      .then(res => res.json())
      .then(json => setData(json.content))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
      console.log(categoryId);
  }, [categoryId]);

  
  console.log(data);
  return { data, loading, error};
}