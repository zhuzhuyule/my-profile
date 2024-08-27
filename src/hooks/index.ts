import { AxiosError, AxiosInstance } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import api from '../libs/api';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

  const handleFetch = useCallback(
    () =>
      api(url)
        .then((res) => {
          setData(res.data);
          setError(null);
        })
        .catch((err) => {
          setError(err);
          setData(null);
        }),
    [url],
  );

  useEffect(() => {
    setLoading(true);
    handleFetch().finally(() => setLoading(false));
  }, [url, flag, handleFetch]);

  return {
    data,
    loading,
    error,
    refresh: (reLoading?: boolean) => (reLoading ? setFlag((pre) => !pre) : handleFetch()),
  };
};

export const useUpdate = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRequest = useCallback(async (method: 'put' | 'post', ...args: Parameters<AxiosInstance['put']>) => {
    setLoading(true);
    try {
      const res = await api[method](...args);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError(err);
      setData(null);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    put: useCallback((...args: Parameters<AxiosInstance['put']>) => handleRequest('put', ...args), [handleRequest]),
    post: useCallback((...args: Parameters<AxiosInstance['post']>) => handleRequest('post', ...args), [handleRequest]),
    clearError: useCallback(() => setError(null), []),
    data,
    error,
    loading,
  };
};
