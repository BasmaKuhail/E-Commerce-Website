import { useState, useEffect } from "react";

export default function useFetchData(tagName) {
  const [productsByTagName, setProductsByTagName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch(`http://localhost:8080/api/productsByTagName/${tagName}`)
      .then(res => res.json())
      .then(json => setProductsByTagName(json))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
      console.log(tagName);
  }, [tagName]);

  console.log(productsByTagName);
  return { productsByTagName, loading, error};
}