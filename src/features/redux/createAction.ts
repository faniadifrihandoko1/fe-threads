// import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
// import axios from "axios";
// import { IPostThread } from "../../types/thread";
// import { axiosInstance } from "../../lib/axios";

// const POST_URL = "http://localhost:3000/api/v1/thread";

// export const createThread = createAsyncThunk(
//   "createThread",
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   async (data: any) => {
//     try {
//       const response = await axios.post(POST_URL, data);
//       return response.data;
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } catch (error: Error | any) {
//       return isRejectedWithValue(error.response.data);
//     }
//   }
// );

// export const getThread = createAsyncThunk("showThread", async () => {
//   try {
//     const response = await axiosInstance.get("/thread");
//     return response.data;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: Error | any) {
//     return isRejectedWithValue(error.response.data);
//   }
// });
