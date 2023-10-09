import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest= useCallback( async (requestConfig, applyRequest)  =>{
    setError(null);
    setIsLoading(true);

    console.log(requestConfig);
    try {
      const response = await fetch(
        requestConfig.url,{
          method: requestConfig.method ? requestConfig.method : 'GET',
          body: requestConfig.body ? JSON.stringify(requestConfig.body): null,
          headers: requestConfig.headers ? requestConfig.headers : {}
        }
      );

      console.log(response);
      if (!response.ok) throw new Error("Request failed!");

      const data = await response.json();

      const loaddedTask = [];
      for (const key in data) {
        loaddedTask.push({
          id: key,
          text: data[key].text,
        });
      }

      applyRequest(loaddedTask);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }

    setIsLoading(false);
  },[])

  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useHttp;
