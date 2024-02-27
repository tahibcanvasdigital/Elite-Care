import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Createservice } from "../../../global/features/Dashboard/createService/ServiceSlice"
import MultiSelect from "../../../components/dropdown/Dropdown";

const ViewForm = () => {
  const [service, getsetservice] = useState({});
  const dispatch = useDispatch();
  const getdata = (e) => {
    getsetservice({ ...service, [e.target.name]: e.target.value });
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
    console.log(service);
    dispatch(Createservice(service));
  };
  return (
    <div className="mx-4 w-70 my-[120px]">
      <h1>View Service</h1>
      <form onSubmit={handlesubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            ServiceName
          </label>
          <input
            type="text"
            name="serviceName"
            class="form-control"
            id="name"
            onChange={getdata}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Description
          </label>
          <input
            type="text"
            name="description"
            class="form-control"
            onChange={getdata}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label for="Experience" class="form-label">
            Price
          </label>
          <input
            type="text"
            name="price"
            onChange={getdata}
            class="form-control"
            id=" available-time"
          />
        </div>
        <div class="mb-3">
          <label for="Experience" class="form-label">
            PageName
          </label>
          <input
            type="text"
            name="pageName"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default ViewForm;
