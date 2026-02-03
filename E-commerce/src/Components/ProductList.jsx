import { useState, useEffect } from "react";

export default function useFetchData() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(json => setProducts(json.content))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(products)

  return { products, loading, error };
}