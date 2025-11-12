import { useState, useEffect } from "react";

export default function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(json => setData(json.products))
      .catch(err => setError(err))
      .finally(() => setLoading(false));

    
  
  }, []);
  const category = data.map(((product) => product.category));
  const uniqueCategory = [...new Set(category)];
  console.log(data)

  return { data, loading, error, uniqueCategory };
}