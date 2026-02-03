import { useState, useEffect } from "react";

export default function useFetchProductsByTagName(tagName) {
  const [productsByTagName, setProductsByTagName] = useState([]);
  const [loadingt, setLoadingt] = useState(true);
  const [errort, setErrort] = useState(null);

  useEffect(() => {
    if (!tagName) return;

    fetch(`http://localhost:8080/api/productsByTagName/${encodeURIComponent(tagName)}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(json => setProductsByTagName(json))
      .catch(err => setErrort(err))
      .finally(() => setLoadingt(false));

  }, [tagName]);

  // console.log(tagName);
  return { productsByTagName, loadingt, errort };
}
