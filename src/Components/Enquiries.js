import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses();
  });

  const getAllCourses = () => {
    axios
      .get("http://localhost:5000/Enquires")
      .then((result) => {
        if (result.status === 200) {
          setCourses(result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h4>List of Enquiries</h4> <br /> <br />
      <table className="table table-striped">
        <thead>
          <th>Course ID</th>
          <th>Name</th>
          <th>Details</th>
        </thead>
        <tbody>
          {Courses.map((item, i) => {
            return (
              <tr key={item.courseid}>
                <td>{item.courseid}</td>
                <td>{item.name}</td>

                <td>
                  <Link
                    to={"/EnquiryDetails/" + item.id}
                    className="btn btn-secondary"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
