import axios from "axios";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { IThread } from "../types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

const useThreads = () => {
  const getKey = (
    pageIndex: number,
    previousPageData: { message: string; data: Array<IThread> }
  ) => {
    if (pageIndex === 0)
      return `${process.env.NEXT_PUBLIC_BASE_URL}/thread?take=10&page=1`;
    if (pageIndex + 1 > +previousPageData?.data.length) return null;
    return `${process.env.NEXT_PUBLIC_BASE_URL}/thread?page=${pageIndex + 1}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const post = data ? data.map((item) => item).flat() : [];

  return {
    data: post,
    isLoading: !error && !data,
    isError: error,
    size: size,
    setSize: setSize,
  };
};

const useThread = (id: number) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/thread/${id}`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const usePopularAuthors = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/thread/popular/authors`,
    fetcher
  );

  return {
    authors: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const useCategory = () => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/category`,
    fetcher
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export { useThreads, useThread, usePopularAuthors, useCategory };
