import React, { useState } from 'react'
import Headers from '../header/Headers'
import Sidebar from '../sidebar/Sidebar'
import Style from '../style.module.css'
import { Link } from 'react-router-dom'
import PaginationComponent from '../../../components/pagination'
import useSWR from 'swr'
import {constants} from '../../../global/constants'
import Loader from '../../../components/Loader'
const Appointment = () => {

  // const data = [
  //   {
  //     id: "1",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     name: "john",
  //     id: "2",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "3",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "4",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "5",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "6",
  //     name: "aaalexli",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "7",
  //     name: "aalex",
  //     email: "ahed@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "8",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "9",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "10",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "11",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     name: "john",
  //     id: "12",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "13",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "14",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "15",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "16",
  //     name: "aaalexli",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "17",
  //     name: "aalex",
  //     email: "ahed@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "18",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "19",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  // ];


  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}api/appoinment?page=1&limit=5`,fetcher)
const appointmentData = data?.data?.results?.results
console.log(appointmentData);
  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  // const records = data.slice(firstindex, lastindex);

  const numberpages = Math.ceil(data?.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className='mx-4'>
          <h1> Appointment</h1>
          <div className="container mt-4   ">
            <table style={{ width: '100%' }} className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}>
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Service</th>
                  <th scope="col">Time</th>
                  <th scope="col">VIEW</th>
                </tr>
              </thead>
              {
                  isLoading ? (
                    <Loader/>
                  )
                  :(
                    appointmentData?.map((item, index) => {
                      // retrun
                      return(
                        <>
                         <tbody key={index}>
                        <tr>
                          <th scope="row">{item._id}</th>
                          <td>{item?.name}</td>
                          <td>{item?.email}</td>
                          <td>{item?.serviceOffered}</td>
                          <td>{item?.createdAt}</td>
                          <td><Link to={`/elite-care/dashboard/viewappoitment/${item._id}`}>view</Link></td>
                        </tr>
                      </tbody>
                        </>
                      )
                     
                      })
                  )

               
              }
            </table>
            <PaginationComponent numbers={numbers} numberpages={numberpages} setCurrentpage={setCurrentpage} currentpage={currentpage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment