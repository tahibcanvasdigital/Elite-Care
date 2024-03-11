import { configureStore } from '@reduxjs/toolkit'
// Dashboard Slices
import ScreenSlice from "../global/features/Dashboard/screensize/ScreenSlice";
import menuReducer from '../global/features/Dashboard/screenmenu/MenuSlice';
import createService from './features/Dashboard/Services/createService';
import createDoctor from './features/Dashboard/Doctors/createDoctor';
import GetdoctorSlice from './features/Dashboard/getdoctorSlice/Getdoctor';
import ViewdoctorSlice from './features/Dashboard/getdoctorSlice/Viewdoctor';
import ViewUsersSlice from './features/Dashboard/usersSlice/Getusers'
import GetSContactSlice from './features/Dashboard/contactusSlice/GetContact'
import GetBlogs from "./features/Dashboard/blogsSlice/GetBlogs";
import getAllCategoriesSlice from "./features/Dashboard/categorySlice/getAllCategories";
import ViewCategorySlice from "./features/Dashboard/categorySlice/Viewcategory";
import createBlog from './features/Dashboard/blogsSlice/createBlog';
import createCategorySlice from './features/Dashboard/categorySlice/createCategory'
import  ViewblogsSlice  from './features/Dashboard/blogsSlice/Viewblog';
import ViewContactSlice from './features/Dashboard/contactusSlice/Viewcontact'

// Web app Slices
import getServicesSlice from './features/Webapp/Services/getServicesSlice';
import loginSlice from './features/Webapp/Auth/loginSlice';
import signUpSlice from './features/Webapp/Auth/signUpSlice';
import createAppointmentSlice from './features/Webapp/Book Appointment/createAppointment'


export const store = configureStore({
    reducer: {
        // Dashboards Reducer
        screen: ScreenSlice,
        menu: menuReducer,
        createDoctor: createDoctor,
        doctors: GetdoctorSlice,
        viewdoctors: ViewdoctorSlice,
        createService: createService,
        viewusers: ViewUsersSlice,
        contactus: GetSContactSlice,
        blogs: GetBlogs,
        viewcategory: ViewCategorySlice,
        createBlog: createBlog,
        getAllCategoriesSlice: getAllCategoriesSlice,
        createCategorySlice: createCategorySlice,
        viewcontactus: ViewContactSlice,
        viewblogs:ViewblogsSlice,
        // WebAPP slices
        getServicesSlice: getServicesSlice,
        loginSlice: loginSlice,
        signUpSlice: signUpSlice,
        createAppointmentSlice: createAppointmentSlice
    },
})