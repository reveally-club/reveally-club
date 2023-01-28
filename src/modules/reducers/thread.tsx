import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ThreadState {
  id: number;
  title: string;
  thumbnail: string;
  summary: string;
  content: string;
  writer: string;
  totalReward: number;
  rewardCount: number;
  participant: number;
  endedTime: Date;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

interface ListResponse<T> {
  code: number;
  data: {
    total: number;
    data: T[];
  };
}

interface Response<T> {
  code: number;
  data: T;
}

export const threadSlice = createApi({
  reducerPath: "thread",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  endpoints: (builder) => ({
    listThreads: builder.query<ListResponse<ThreadState>, number | void>({
      query: (page = 1) => `/threads?take=100&page=${page}`,
    }),
    detailThread: builder.query<Response<ThreadState>, number | void>({
      query: (id = 1) => `/threads/${id}`,
    }),
    searchThread: builder.query<ListResponse<ThreadState>, string | void>({
      query: (text = "") => `threads/search?take=10&page=1&text=${text}`,
    }),
  }),
});

export const {
  useListThreadsQuery,
  useDetailThreadQuery,
  useSearchThreadQuery,
} = threadSlice;
