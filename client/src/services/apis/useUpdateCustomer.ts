import { useState } from "react";
import { AXIOS_INSTANCE } from "../axios";
import { ENDPOINTS } from "../endpoints";

export function useUpdateCustomer() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCustomer = async (cusId: string, status: string) => {
    try {
      setLoading(true);
      const response = await AXIOS_INSTANCE.post(ENDPOINTS.updateCustomer, {
        id: cusId,
        status: status,
      });
      return response.data;
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, updateCustomer };
}
