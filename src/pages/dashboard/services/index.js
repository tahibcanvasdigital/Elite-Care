import React from "react";
import Style from '../style.module.css'
import { Link } from "react-router-dom";
const Service = () => {


  const data = [
    {
      id: '1',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
    {
      name: 'ahmed',
      id: '2',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
    {
      id: '3',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
    {
      id: '4',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },

    {
      id: '5',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
    {
      id: '6',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },


    {
      id: '7',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
    {
      id: '8',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },

    {
      id: '9',
      name: 'ahmed',
      email: 'ahed@gmail.com',
      service: ["abc", "acbc", 'adad',],
      time: '12:00 oClock'
    },
  ]


  return (
    <div>
      <div className={Style.btn_doc}>
        <Link to={'/elite-care/dashboard/addformser'}>
          <button>Add Service</button>
        </Link>

      </div>
      <table className={`table ${Style.tab}`}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Service</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        {
          data.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.service}</td>
                <td>{item.time}</td>
                <td><Link to={'/elite-care/dashboard/viewformser/14141313'}>view</Link></td>
              </tr>
            </tbody>
          ))
        }
      </table>
    </div>
  );
};

export default Service;
