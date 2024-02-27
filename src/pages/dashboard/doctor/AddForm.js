import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { CreateDocotor } from "../../../features/createdoctor/DoctorSlice";
import { CreateDocotor } from "../../../global/features/Dashboard/createdoctor/DoctorSlice";
import MultiSelect from "../../../components/dropdown/Dropdown";

const AddForm = () => {
  const [doctor, getsetdoctor] = useState({});
  const dispatch = useDispatch();
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
    dispatch(CreateDocotor(doctor));
  };
  return (
    <div className="mx-4 w-70 my-[120px]">
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
