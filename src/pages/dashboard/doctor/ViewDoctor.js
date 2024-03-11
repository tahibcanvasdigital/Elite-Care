import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MultiSelect from "../../../components/dropdown/Dropdown";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from '../style.module.css'
import { useParams } from "react-router-dom";
import { selectdoctor } from "../../../global/features/Dashboard/getdoctorSlice/Getdoctor";
import { viewdoctors } from "../../../global/features/Dashboard/getdoctorSlice/Viewdoctor";
import Loader from "../../../components/Loader";

const ViewDoctor = () => {

  const { id } = useParams()
  console.log(id);
  const dispatch = useDispatch();
  const {data ,loading} = useSelector((state) => state.viewdoctors);


  useEffect(() => {
    dispatch(viewdoctors(id))
  }, [dispatch])
  const [doctor, getsetdoctor] = useState({});

  const getdata = (e) => {
    getsetdoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  //dropdown
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };
  //dropend

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(doctor);
  };
  return (
    <div className="d-flex">

      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        {
          loading ? <Loader/> :  <div className="mx-4">
          <h1>Create Doctor</h1>
          <form onSubmit={handlesubmit}>
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control"
                value={data.data?.name}
                id="name"
                onChange={getdata}
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                class="form-control"
                value={data.data?.email}
                onChange={getdata}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3 ">
              <label for="" class="form-label">
                Service offered (dropdown)
              </label>
              <MultiSelect options={options} onChange={handleChange} />
              <p>Selected Options: {selectedOptions.join(", ")}</p>
            </div>
            <div class="mb-3">
              <label for="Experience" class="form-label">
                Available time:
              </label>
              <input
                type="text"
                name="availabletime"
                onChange={getdata}
                class="form-control"
                value={data.data?.availableTime}
                id=" available-time"
              />
            </div>

            <div class="mb-3">
              <label for="formFile" class="form-label">
                Upload *
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                name="image"

                onChange={getdata}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>
        }
       
      </div>
    </div>
  );
};

export default ViewDoctor;
