import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
       
        if (!res.ok) {
      
            throw {
             error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        let dataJson = await res.json();

        setIsPending(false);
        setData(dataJson);
        setError(false);
      } catch (error) {

        setIsPending(false);
        setError(error);
      }

   
    };

    getData(url);
  }, [url]);
  return { data, isPending, error };
};
