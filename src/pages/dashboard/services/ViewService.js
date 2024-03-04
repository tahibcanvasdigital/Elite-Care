import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from 'swr'
import MultiSelect from "../../../components/dropdown/Dropdown";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from '../style.module.css'
import { useParams } from "react-router-dom";
const ViewService = () => {
  const { id } = useParams()
  console.log(id);
  const [service, getsetservice] = useState({});
  const dispatch = useDispatch();
  // const getdata = (e) => {
  //   getsetservice({ ...service, [e.target.name]: e.target.value });
  // };

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
    // dispatch(Createservice(service));
  };

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`http://localhost:8080/api/services/${id}`, fetcher)
  const serviceData = data?.data
  console.log(serviceData);
  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className=" w-100 my-[120px]">
        <Headers />
        <div className="mx-4">
          <h1>Add Service</h1>
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
                // onChange={getdata}
                aria-describedby="emailHelp"
                value={serviceData?.serviceName}
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
                // onChange={getdata}
                value={serviceData?.description}
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
                // onChange={getdata}
                value={serviceData?.price}
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
                // onChange={getdata}
                value={serviceData?.pageName
                }
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
              // onChange={getdata}
              // value={serviceData.image}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </form>
        </div>

      </div>
    </div>

  );
};

export default ViewService;
