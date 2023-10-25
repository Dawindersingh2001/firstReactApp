import { useState, useEffect } from 'react';

const useFetch = (url)=>{
    const [data, setBlog] = useState(null);
    const [error,setError] = useState(true);

    useEffect(() => {
          fetch(url).then((res) => {
                if(!res.ok){
                      throw Error("Not fetch record");
                }
                return res.json();

          }).then((data) => {

                setBlog(data);
                setError(false);
          }).catch(err => {
                setError(err.message);
          });
    },[url]);

    return {data,error}

}


export default useFetch;