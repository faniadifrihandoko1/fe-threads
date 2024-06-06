import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

export const getThread = createAsyncThunk(
  "user/showThread",
  async (userId: number) => {
    try {
      const response = await axiosInstance.get(`/thread?id=${userId}`);
      console.log("asynthunk", response.data);
      return response.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: Error | any) {
      return isRejectedWithValue(error.response.data);
    }
  }
);

export const getThreadById = createAsyncThunk(
  "ThreadById",
  async ({ threadId, userId }: { threadId: number; userId: number }) => {
    try {
      const response = await axiosInstance.get(`/thread/${threadId}?id=${userId}`);
      return response.data; // Mengembalikan data dari respons
    } catch (error) {
      console.log(error);
      throw error; // Melemparkan error agar dapat ditangani oleh pemanggil fungsi
    }
  }
);

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

export const likeThread = createAsyncThunk(
  "likeThread",
  async ({ threadId, isLike }: { threadId: number; isLike: boolean }) => {
    try {
      const response = await axiosInstance.post(`/thread/like/${threadId}`);
      console.log(`response like Thread`, response);
      return {
        threadId,
        isLike,
      };
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllUser = createAsyncThunk("getAllUser", async () => {
  try {
    const response = await axiosInstance.get("/user/follow?type=allUser");
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    return isRejectedWithValue(error.response.data);
  }
});

export const getSuggest = createAsyncThunk("suggest", async () => {
  try {
    const response = await axiosInstance.get(`/user/follow?type=sugestion`);
    console.log("asynthunk", response.data.data);
    return response.data.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    return isRejectedWithValue(error.response.data);
  }
});
