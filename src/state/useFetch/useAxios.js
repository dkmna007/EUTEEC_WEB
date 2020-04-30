import axios from "axios";
import { useState } from "react";
export const useAxios = (method, url, data) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadingPercentage, setUploadingPercentage] = useState(null);
  const getResponse = async preparedData => {
    setIsLoading(true);

    const onUploadProgress = progressEvent => {
      setUploadingPercentage(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      );
    };

    try {
      const res = await axios({
        method,
        url,
        data: data || preparedData,
        onUploadProgress
      });
      const dataArray = res.data;
      setResponse(dataArray);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { response, error, isLoading, getResponse, uploadingPercentage };
};
