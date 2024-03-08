import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Headers from '../header/Headers'
import style from './style.module.css'
import { useDispatch } from 'react-redux'
// import { Postcategory } from '../../../global/features/Dashboard/categorySlice/Addcategory'

const AddCategory = () => {
    const [category, getsetcategory] = useState({});
    const dispatch = useDispatch();
    const getdata = (e) => {
        getsetcategory({ ...category, [e.target.name]: e.target.value });
    };
  

  
    const handlesubmit = (e) => {
      e.preventDefault();
      
      console.log(category);
    
    }
    console.log(category);
  return (
    <div className="d-flex">
    <div className={style.sidecolor}>
      <Sidebar/>
    </div>
    <div className=" w-100 my-[120px]">
      <Headers/>
      <div className="mx-4">
      <h1>Create Category</h1>
    <form onSubmit={handlesubmit}>
      <div class="mb-3">
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="name"
          name="name"
          class="form-control"
          id="name"
          onChange={getdata}
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" class="btn btn-dark">
        Submit
      </button>
    </form>
      </div>
  
  </div>
  </div>
  )
}

export default AddCategory