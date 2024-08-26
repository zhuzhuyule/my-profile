import { AxiosInstance } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import api from '../libs/api';

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setLoading(true);
    api(url)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [url, flag]);

  return {
    data,
    loading,
    error,
    refresh: useCallback(() => setFlag((pre) => !pre), []),
  };
};

export const useUpdate = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<unknown>(null);
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
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    put: useCallback((...args: Parameters<AxiosInstance['put']>) => handleRequest('put', ...args), [handleRequest]),
    post: useCallback((...args: Parameters<AxiosInstance['post']>) => handleRequest('post', ...args), [handleRequest]),
    data,
    error,
    loading,
  };
};
