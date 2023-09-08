import { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import axios from "axios";
import { API_BASE_URL } from "@env";

const apiBaseUrl = API_BASE_URL;

const useFetch = (endpoint, query, isPaginated = false) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(isPaginated ? 1 : null);
  const [totalPages, setTotalPages] = useState(1);

  const { getToken } = useAuth();

  const fetchData = async (currentPage = 1) => {
    setIsLoading(true);

    const token = await getToken();

    const options = {
      method: "GET",
      url: apiBaseUrl + endpoint,
      params: {
        ...query,
        ...(isPaginated && { page: currentPage.toString() }),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.data);

      if (response.data.meta && response.data.meta.totalPages) {
        setTotalPages(response.data.meta.totalPages);
      }

      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [endpoint, JSON.stringify(query), ...(isPaginated ? [page] : [])]);

  const refetch = () => fetchData(page || 1);

  const handlePagination = (direction) => {
    if (!isPaginated) return;
    if (direction === "left" && page > 1) setPage(page - 1);
    else if (direction === "right") setPage(page + 1);
  };

  const resetPage = () => {
    setPage(1);
  };

  return {
    data,
    isLoading,
    error,
    refetch,
    ...(isPaginated && { page, handlePagination, resetPage, totalPages }),
  };
};

export default useFetch;
