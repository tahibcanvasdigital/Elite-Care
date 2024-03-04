import { configureStore } from '@reduxjs/toolkit'
// Dashboard Slices
import ScreenSlice from "../global/features/Dashboard/screensize/ScreenSlice";
import menuReducer from '../global/features/Dashboard/screenmenu/MenuSlice';
import createService from './features/Dashboard/Services/createService';
import createDoctor from './features/Dashboard/Doctors/createDoctor';
import GetdoctorSlice from './features/Dashboard/getdoctorSlice/Getdoctor';
import ViewdoctorSlice from './features/Dashboard/getdoctorSlice/Viewdoctor';
// Web app Slices
import getServicesSlice from './features/Webapp/Services/getServicesSlice';
import loginSlice from './features/Webapp/Auth/loginSlice';

export const store = configureStore({
    reducer: {
        // Dashboards Reducer
        screen: ScreenSlice,
        menu: menuReducer,
        createDoctor: createDoctor,
        doctors: GetdoctorSlice,
        viewdoctors: ViewdoctorSlice,
        // WebAPP slices
        getServicesSlice: getServicesSlice,
        loginSlice: loginSlice,
        createService: createService
    },
})