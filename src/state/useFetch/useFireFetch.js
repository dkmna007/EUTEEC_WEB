import { useState, useEffect } from "react";
import { db } from "../../firebase/index";

// or get all collection
export const useDataCollection = (collection, options) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  const FetchAllData = async () => {
    try {
      db.collection(collection)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          setResponse(data);
          setIsloading(false);
        });
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchAllData();
  }, []);
  return { response, error, isLoading };
};

// or get all docs matching the query
export const useDataQuery = (collection, fieldPath, value) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const oPString = "==";

  const FetchQueryData = async () => {
    try {
      db.collection(collection)
        .where(fieldPath, oPString, value)
        .get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc => doc.data());
          setResponse(data);
          setIsloading(false);
        });
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    FetchQueryData();
  }, []);
  return { isLoading, error, response };
};
