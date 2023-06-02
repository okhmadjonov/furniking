import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/trending";
export const getAllTrends = createAsyncThunk("products/getTrends", async () => {
  return await axios.get(baseUrl).then((res) => res.data);
});

const baseUrl2 = "http://localhost:5000/ourproducts";
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    return await axios.get(baseUrl2).then((res) => res.data);
  }
);
