import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { constants } from "../../../constants";

export const updateServiceApi = createAsyncThunk(
  "updateServiceApi",
  async (body) => {
    const {id} = body
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      let token = user.data?.refreshToken;
      
      const response = await fetch(
        `${constants.baseUrl}/api/services/${id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const result = await response.json();
      console.log("Update Api of Service", result);
      return result;
    } catch (error) {
      console.log("Update Api of Service", error.message);
    }
  }
);
const updateService = createSlice({
  name: "updateService",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null,
  },
  reducers:{
 clearUpdateService(){
  return{
    isLoading: false,
    isError: false,
    data: null,
    success: null,
    message: null
  }
 }
  },
  extraReducers: (builder) => {
    builder
    .addCase(updateServiceApi.pending,(state)=>{
        state.isLoading = true;
        state.data = null;
    })
    .addCase(updateServiceApi.fulfilled,(state,action)=>{
        state.isLoading = false
        state.data = action.payload
        state.success = action?.payload?.success
        state.message = action?.payload?.message
    })
    .addCase(updateServiceApi.rejected,(state)=>{
        state.isError = true
        state.data = null
    })
    
  },
});
export const {clearUpdateService} = updateService.actions
export default updateService.reducer;
