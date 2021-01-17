import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();

    setIsLoading(true);
    fetch(url, { signal: abortCtrl.signal })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted ⛑');
        } else {
          console.log(err);
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
