import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const viewdoctors = createAsyncThunk("viewdoctors", async (id) => {
  let Url = await fetch(`http://localhost:8080/api/doctor/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  //   console.log(result);
  return result;
});

export const ViewdoctorSlice = createSlice({
  name: "viewdoctors",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewdoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(viewdoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(viewdoctors.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const viewdoctor = (state) => state.viewdoctors;

export default ViewdoctorSlice.reducer;
