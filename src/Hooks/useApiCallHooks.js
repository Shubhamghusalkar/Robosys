import axios from "axios";
import React, { useState } from "react";
const useApiCallHooks = () => {
  const apiUrl = "http://192.168.1.27:8000/api/v1/";
  const [responce, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [statusCode, setStatusCode] = useState("");
  const callAPI = (type, apiName, params) => {
    setLoading(true);
    setError([]);
    const request = axios[type](apiUrl + apiName, params); // params should be an object
    request
      .then((res) => {
        setData(res.data); // Access response data with res.data
        setStatusCode(res?.status || 500);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response?.data || error.message);
        setStatusCode(error.response?.status || 500);
        setLoading(false);
      });
  };
  return [responce, loading, error, callAPI, statusCode];
};
export default useApiCallHooks;