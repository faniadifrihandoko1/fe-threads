import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

export const getThread = createAsyncThunk("user/showThread", async () => {
  try {
    const response = await axiosInstance.get("/thread");

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    return isRejectedWithValue(error.response.data);
  }
});

export const createThread = createAsyncThunk(
  "createThread",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (data: any) => {
    try {
      const response = await axiosInstance.post("/thread", data);
      console.log(response.data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const deleteThread = createAsyncThunk(
  "deleteThread",
  async (id: number) => {
    try {
      const response = await axiosInstance.delete(`/thread/${id}`);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      return isRejectedWithValue(error.response.data);
    }
  }
);