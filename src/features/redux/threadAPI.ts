import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IThread } from "./types";
const BASEURL = "http://localhost:3000/api/v1";

export const threadAPI = createApi({
  reducerPath: "threadAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Thread"],
  endpoints: (builder) => ({
    getThread: builder.query<IThread[], void>({
      query: () => ({
        url: "/thread",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetThreadQuery } = threadAPI;
