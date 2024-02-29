import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constants } from "../../../constants";


export const createDoctorApi = createAsyncThunk("createDoctorApi", async (body) => {

    const user = JSON.parse(localStorage.getItem('user'));
    let token = user.data?.refreshToken

    console.log(token, "body", body);
    const formData = new FormData()
    formData.append('name', body.serviceName);
    formData.append('email', body.description);
    formData.append('serviceOffered', body.serviceImg);
    formData.append('availableTime', body.price);
    formData.append('doctorImg', body.pageName);

    try {
        const response = await fetch(`${constants.baseUrl}api/doctor`, {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
        const result = await response.json();
        console.log("resultsssssssssss", result)
        return result;

    } catch (error) {
        console.log("error in create Doctor", error.message)
        throw error;
    }
})
const createDoctor = createSlice({
    name: "createDoctor",
    initialState: {
        isLoading: false,
        isError: false,
        data: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(createDoctorApi.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createDoctorApi.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(createDoctorApi.rejected, (state, action) => {
                state.isError = true
                state.data = null
            })
    }
})

export default createDoctor.reducer