import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Headers from '../header/Headers'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify'
import { updateCategoryApi,clearUpdateCategory } from '../../../global/features/Dashboard/categorySlice/updateCategory'
import { useParams } from 'react-router-dom'

const UpdateblogCategory = () => {
  const [category, setCategory] = useState({
    name: ''
  });
  const dispatch = useDispatch();
  const { success, message } = useSelector((value) => value.updateCategory)

const {id} = useParams()
console.log(id)
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategoryApi({
id:id,
category:category
    }))
  }
  useEffect(() => {
    if (success == true) {
      toast.success(message, {
        position: 'top-center'
      })
      setCategory({
        name: ''
      })
      dispatch(clearUpdateCategory())
    }

    else if (success == null) {
      return;
    }
    else {
      toast.error(message, {
        position: 'top-center'
      })
      dispatch(clearUpdateCategory())

    }
  }, [success,message])
  console.log(category);
  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="mx-4 container">
          <h1> Update blog Category</h1>
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
                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                value={category.name}
                aria-describedby="emailHelp"
              />
            </div>
            <button  type="submit" class="btn btn-dark">
        Update
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default UpdateblogCategory