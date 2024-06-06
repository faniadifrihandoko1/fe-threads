import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";

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
