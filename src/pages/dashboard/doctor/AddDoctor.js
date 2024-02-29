import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { CreateDocotor } from "../../../global/features/Dashboard/createdoctor/DoctorSlice";
import MultiSelect from "../../../components/dropdown/Dropdown";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";

const AddDoctor = () => {
  const [doctor, getsetdoctor] = useState({});
  const dispatch = useDispatch();
  const getdata = (e) => {
    getsetdoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const options = ["Dentsist", "Surgical", "Therapist", "MBBS", "Neurologist", "Cardiologist", "Orthopedic Surgeon"];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [doctorValues, setDoctorValues] = useState({
    name: '',
    email: '',
    serviceOffered: selectedOptions,
    availableTime: [],
    doctorImg: null
  })
  //dropdown


  const handleChange = (newSelectedOptions) => {
    setSelectedOptions(newSelectedOptions);
  };
  //dropend


  const imageHandler = (e) => {
    const selectedFile = e.target.files[0];
    setDoctorValues({ ...doctorValues, doctorImg: selectedFile });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(doctor);
    // dispatch(CreateDocotor(doctor));
  };

  console.log(doctorValues);
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="mx-4">
          <h1>Create Doctor</h1>
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
                onChange={(e) => { setDoctorValues({ ...doctorValues, name: e.target.value }) }}
                aria-describedby="emailHelp"
                value={doctorValues.name}
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
                onChange={(e) => { setDoctorValues({ ...doctorValues, email: e.target.value }) }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={doctorValues.email}
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
                onChange={(e) => { setDoctorValues({ ...doctorValues, availableTime: e.target.value }) }}
                class="form-control"
                id=" available-time"
                value={doctorValues.availableTime}
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
                onChange={imageHandler}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>

  );
};

export default AddDoctor;
