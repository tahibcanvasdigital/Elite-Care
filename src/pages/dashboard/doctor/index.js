import React from "react";
import Style from '../style.module.css'
import { Link } from "react-router-dom";
const Doctors = () => {
  return (
    <div>
      <div className={Style.btn_doc}>
        <Link to={'/elite-care/dashboard/addformdoc'}>
          <button>Add Doctor</button>
        </Link>

      </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><Link to={'/elite-care/dashboard/viewformdoc/565465464565464'}>view</Link></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;