import { useState } from "react";

export const useFakeFetch = () => {
  const [data, setData] = useState<string | null>(null);

  const fetchData = async () => {
    setTimeout(() => {
      setData("Fetched Data");
    }, 1000);
  };

  const resetData = () => {
    setData(null);
  };

  return { data, fetchData, resetData };
};
