import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Headers from '../header/Headers'
import Style from '../style.module.css'
import { Link } from 'react-router-dom'
import PaginationComponent from '../../../components/pagination'

const ContactUs = () => {
    const data = [
        {
          id: "1",
          name: "john",
          email: "john@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
          name: "john",
          id: "2",
          email: "john@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
          id: "3",
          name: "john",
          email: "john@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
          id: "4",
          name: "aalex",
          email: "aalex@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
    
        {
          id: "5",
          name: "aalex",
          email: "aalex@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
          id: "6",
          name: "aaalexli",
          email: "aalex@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
    
        {
          id: "7",
          name: "aalex",
          email: "ahed@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
          id: "8",
          name: "john",
          email: "john@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
    
        {
          id: "9",
          name: "john",
          email: "john@gmail.com",
          service: ["abc", "acbc", "adad"],
          time: "12:00 oClock",
        },
        {
            id: "10",
            name: "john",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            id: "11",
            name: "john",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            name: "john",
            id: "12",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            id: "13",
            name: "john",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            id: "14",
            name: "aalex",
            email: "aalex@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
      
          {
            id: "15",
            name: "aalex",
            email: "aalex@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            id: "16",
            name: "aaalexli",
            email: "aalex@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
      
          {
            id: "17",
            name: "aalex",
            email: "ahed@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
          {
            id: "18",
            name: "john",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
      
          {
            id: "19",
            name: "john",
            email: "john@gmail.com",
            service: ["abc", "acbc", "adad"],
            time: "12:00 oClock",
          },
      ];
      const [currentpage, setCurrentpage] = useState(1);
      const recordPage = 10;
      const lastindex = currentpage * recordPage;
      const firstindex = lastindex - recordPage;
      const records = data.slice(firstindex, lastindex);
    
      const numberpages = Math.ceil(data.length / recordPage);
    
      const numbers = Array.from({ length: numberpages }, (_, index) =>
        (index + 1).toString().padStart(2, "0")
      );
  return (
    <div className="d-flex">
    <div>
      <Sidebar />
    </div>
    <div className="w-100">
      <Headers/>
      <div className='mx-4'>
      <h1> Contact </h1>
      <div className="container mt-4   ">
      <table  style={{width : '100%'}} className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}>
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
          records.map((item,index)=>(
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.service}</td>
              <td>{item.time}</td>
              <td><Link to={'/elite-care/dashboard/viewcontactus/14141313'}>view</Link></td>
            </tr>
            </tbody>
          ))
        }
      </table>
      <PaginationComponent numberpages={numberpages} numbers={numbers} setCurrentpage={setCurrentpage} currentpage={currentpage}/>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs