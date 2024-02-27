import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const CreateDocotor = createAsyncThunk("CreateDocotor", async (data) => {

    let Url = await fetch("", {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(data)
    })
    console.log(data)

    let result = await Url.json()
    return result
})

const CreateDocotorSlice = createSlice({
    name: "CreateDocotorSlice",
    initialState: {
        data: [],
        loading: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(CreateDocotor.pending, (state, action) => {
                state.loading = true

            })
            .addCase(CreateDocotor.fulfilled, (state, action) => {
                state.loading = false
                state.data.push(action.payload)

            })
            .addCase(CreateDocotor.rejected, (state, action) => {
                state.loading = false

            })
    }
})


export default CreateDocotorSlice.reducer