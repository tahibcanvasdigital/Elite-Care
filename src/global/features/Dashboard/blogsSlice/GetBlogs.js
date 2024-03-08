import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getblogs = createAsyncThunk("getblogs", async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MzE1NzJiZjczMjE3YWZlYWYzZGIiLCJpYXQiOjE3MDk4MTc1MDcsImV4cCI6MTcxMDQyMjMwN30.bNNHXeI1Nb-92q9_P-Q7f_xKmsfbhYeEVPhKzMClMcM";
  let Url = await fetch("https://flutterapi.testdevlink.net/elite-care-db/api/blog?limit=5&page=1", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded ",
      Authorization: `Bearer ${token}`,
    },

  });

  let result = await Url.json();
  // console.log(result);
  return result;
});

export const GetblogsSlice = createSlice({
  name: "blogs",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getblogs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getblogs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getblogs.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default GetblogsSlice.reducer;
