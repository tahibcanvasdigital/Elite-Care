import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updatedoctors = createAsyncThunk("updatedoctors", async (body) => {
  const { id } = body;

  const formData = new FormData();
  formData.append("name", body.name);
  formData.append("email", body.email);
  formData.append("serviceOffered", body.serviceOffered);
  formData.append("availableTime", body.availableTime);
  formData.append("doctorImg", body.doctorImg);

  try {
    let Url = await fetch(`https://flutterapi.testdevlink.net/elite-care-db/api/doctor/${id}`, {
      method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    let result = await Url.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
});

export const UpdatedoctorSlice = createSlice({
  name: "updatedoctors",
  initialState: {
    isLoadin: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatedoctors.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatedoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updatedoctors.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectdoctor = (state) => state.updatedoctors;

export default UpdatedoctorSlice.reducer;