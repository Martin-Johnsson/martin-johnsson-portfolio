import { useCallback, useEffect, useRef, useState } from 'react';

interface IResponseData {
  project: any;
  projects: any;
  status: number;
  message?: string;
}

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      body: null,
      headers: HeadersInit | null = {},
      method = 'GET'
    ) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        activeHttpRequests.current.push(httpAbortCtrl);

        const responseData: IResponseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl: AbortController) => reqCtrl !== httpAbortCtrl
        );

        if (!response.ok) {
          setIsLoading(false);
          throw new Error(responseData.message ?? 'Something went wrong.');
        }

        setIsLoading(false);
        return responseData;
      } catch (err: unknown) {
        let errorMessage = 'Something went wrong, please try again later.';

        if (err instanceof Error) {
          errorMessage = err.message;
          setError(errorMessage);
          setIsLoading(false);

          throw err;
        }
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => {
        abortCtrl.abort();
      });
    };
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
