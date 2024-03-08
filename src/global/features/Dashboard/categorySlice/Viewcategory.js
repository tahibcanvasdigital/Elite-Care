import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const viewcategory = createAsyncThunk("viewcategory", async (id) => {
    try {
        const token = 
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3MzE1NzJiZjczMjE3YWZlYWYzZGIiLCJpYXQiOjE3MDk3Mjk5MDAsImV4cCI6MTcxMDMzNDcwMH0.ffWZ6IMnLHX_pllWBqmk2oiS02MINrBmLdnR9u0rbi0"
      let Url = await fetch(`http://localhost:8080/api/category/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded " ,   'Authorization':`Bearer ${token}`, },
        body: JSON.stringify(),
      });
    
      let result = await Url.json();
        console.log(result);
      return result;
        
    } catch (error) {
        console.log(error.message)
        
    }
   
});

export const ViewCategorySlice = createSlice({
  name: "viewcategory",
  initialState: {
    data: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewcategory.pending, (state, action) => {

        state.loading = true;
      })
      .addCase(viewcategory.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(viewcategory.rejected, (state, action) => {
        state.loading = false;
      });
  },
});



export default ViewCategorySlice.reducer;
