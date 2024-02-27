import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const Createservice = createAsyncThunk("Createservice", async (data) => {

    let Url = await fetch("", {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(data)
    })
    console.log(data)

    let result = await Url.json()
    return result
})

const CreateServicesSlice = createSlice({
    name: "CreateServicesSlice",
    initialState: {
        data: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(Createservice.pending, (state, action) => {
                state.loading = true

            })
            .addCase(Createservice.fulfilled, (state, action) => {
                state.loading = false
                state.data.push(action.payload)

            })
            .addCase(Createservice.rejected, (state, action) => {
                state.loading = false

            })
    }
})


export default CreateServicesSlice.reducer