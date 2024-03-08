import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getdoctors = createAsyncThunk("doctors/getdoctors", async () => {
  let Url = await fetch("https://flutterapi.testdevlink.net/elite-care-db/api/doctor", {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(),
  });

  let result = await Url.json();
  //   console.log(result);
  return result;
});

export const GetdoctorSlice = createSlice({
  name: "doctors",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getdoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getdoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getdoctors.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectdoctor = (state) => state.doctors;

export default GetdoctorSlice.reducer;
