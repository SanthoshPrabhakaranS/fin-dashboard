import { useState, useEffect } from "react";
import { AXIOS_INSTANCE } from "../axios";
import { ENDPOINTS } from "../endpoints";

export function useGetAllCustomers() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await AXIOS_INSTANCE.get(ENDPOINTS.getAllCustomers);
      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
}
