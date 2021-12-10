import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

// TODO - Return more useful data, like response status
export const useAxiosGet = <T>(url: string): { data: T | undefined; error: string; loading: boolean } => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const tokenString = sessionStorage.getItem("token");
      const config: AxiosRequestConfig | undefined = tokenString
        ? { headers: { Authorization: `Bearer ${JSON.parse(tokenString)}` } }
        : undefined;

      await axios
        .get(url, config)
        .then(response => {
          return setData(response.data);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    };

    getData();
  }, [url]);

  return { data, error, loading };
};

// TODO - Fix typescript errors and change functions below to custom hooks (like useAxiosGet above)
export const axiosPost = (url: string, requireAuth?: boolean, data?: any) => {
  let config: AxiosRequestConfig | undefined;
  if (requireAuth) {
    const tokenString = sessionStorage.getItem("token");
    config = tokenString ? { headers: { Authorization: `Bearer ${JSON.parse(tokenString)}` } } : undefined;
  }

  return axios.post(url, data, config);
};
export const axiosDelete = (url: string, includeAuth?: boolean) => {
  let config: AxiosRequestConfig | undefined;
  if (includeAuth) {
    const tokenString = sessionStorage.getItem("token");
    config = tokenString ? { headers: { Authorization: `Bearer ${JSON.parse(tokenString)}` } } : undefined;
  }

  return axios.delete(url, config);
};
