import { useState, useEffect } from "react";

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  


  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(json => setUsers(json.users))
      .catch(err => setError(err))
      .finally(() => setLoading(false));

    
  
  }, []);

  console.log(users)

  return { users, loading, error };
}