import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useFetcher = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useFetcher;
