import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error('Something went wrong');
        }
        const result = await response.json();
        setData(result);
      }
      catch(error){
        setError(error);
      }
    };

    fetchData();
  },[url]);
  return {data, error}
}

export default useFetch;