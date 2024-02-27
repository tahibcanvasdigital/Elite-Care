import { configureStore } from '@reduxjs/toolkit'
import ScreenSlice from "../global/features/Dashboard/screensize/ScreenSlice";
import menuReducer from '../global/features/Dashboard/screenmenu/MenuSlice';
import CreateDocotorSlice from '../global/features/Dashboard/createdoctor/DoctorSlice'
import CreateServicesSlice from '../global/features/Dashboard/createService/ServiceSlice'
export const store = configureStore({
    reducer: {
        // Dashboards Reducer
        screen: ScreenSlice,
        menu: menuReducer,
        CreateDocotorSlice: CreateDocotorSlice,
        CreateServicesSlice: CreateServicesSlice
    },
})