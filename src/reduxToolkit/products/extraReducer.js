import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/trending";
export const getAllTrends = createAsyncThunk("products/getTrends", async () => {
  return await axios.get(baseUrl).then((res) => res.data);
});
