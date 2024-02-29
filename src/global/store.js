import { configureStore } from '@reduxjs/toolkit'
// Dashboard Slices
import ScreenSlice from "../global/features/Dashboard/screensize/ScreenSlice";
import menuReducer from '../global/features/Dashboard/screenmenu/MenuSlice';

// Web app Slices
import getServicesSlice from './features/Webapp/Services/getServicesSlice';
import loginSlice from './features/Webapp/Auth/loginSlice';
import createService from './features/Webapp/Services/createService';
import createDoctor from './features/Dashboard/Doctors/createDoctor';
export const store = configureStore({
    reducer: {
        // Dashboards Reducer
        screen: ScreenSlice,
        menu: menuReducer,
        createDoctor: createDoctor,
        // WebAPP slices
        getServicesSlice: getServicesSlice,
        loginSlice: loginSlice,
        createService: createService
    },
})