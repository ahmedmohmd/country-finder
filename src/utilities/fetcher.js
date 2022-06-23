import useSWR from "swr";
import axios from "axios";
import { toast } from "react-toastify";

// const fetcher = (url) => axios.get(url).then((res) => res.data);

const fetcher = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    toast.error("Sorry,There is an Error!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
};

const useFetcher = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useFetcher;
