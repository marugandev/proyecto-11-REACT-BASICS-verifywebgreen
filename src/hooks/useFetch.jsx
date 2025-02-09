import { useState, useRef } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const controllerRef = useRef(null);
  const [lastUrl, setLastUrl] = useState(null);

  const fetchData = async (url) => {
    if (!url || lastUrl === url) return;

    setLoading(true);
    setError(null);
    setMessage(null);
    setLastUrl(url);

    if (controllerRef.current) controllerRef.current.abort();
    const abortController = new AbortController();
    controllerRef.current = abortController;

    const isProduction = import.meta.env.MODE === "production";
    const backendServerUrl = isProduction
      ? import.meta.env.VITE_BACKEND_SERVER_URL
      : "/api";

    if (isProduction && !backendServerUrl)
      throw new Error(
        "Error: VITE_BACKEND_SERVER_URL is not defined in .env.production"
      );

    try {
      const res = await fetch(
        `${backendServerUrl}/api/site?url=${encodeURIComponent(url)}`,
        {
          signal: abortController.signal
        }
      );

      if (!res.ok) throw new Error(`Error: ${res.status} | ${res.statusText}`);

      const result = await res.json();
      setData(result);
      /*       console.log("log", result); */

      if (result.error) throw new Error(result.error);
    } catch (err) {
      if (err.name === "AbortError") {
        setMessage("Request canceled");
      } else {
        setError(err.message || "Error: An unknown error occurred");
      }
      /*       console.error("err", err); */
    } finally {
      setLoading(false);
    }
  };

  const handleCancelReq = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      console.log("Request aborted");
      setMessage("Request cancelled");
      setData(null);
      setError(null);
    }
  };

  return {
    data,
    error,
    loading,
    fetchData,
    handleCancelReq,
    message,
    setMessage,
    setLastUrl
  };
};

export default useFetch;
