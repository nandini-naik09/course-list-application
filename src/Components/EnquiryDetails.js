import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetails() {
  let { id } = useParams();

  const initialEnquiryState = {
    courseid: 0,
    name: "",
    email: "",
    message: "",
  };

  const [enquiry, setEnquiry] = useState(initialEnquiryState);

  useEffect(() => {
    GetEnquiryDetailsByCourseID();
  }, []);

  const GetEnquiryDetailsByCourseID = () => {
    axios
      .get("http://localhost:5000/Enquires/" + id)
      .then((result) => {
        setEnquiry(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          Details of <b> {enquiry.name}</b>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"> Id: {enquiry.courseid}</li>
          <li className="list-group-item"> Name: {enquiry.name}</li>
          <li className="list-group-item"> Email: {enquiry.email}</li>
          <li className="list-group-item"> Message: {enquiry.message}</li>
        </ul>
        <div className="card-footer">
          <Link to="/Enquiries" className="btn btn-secondary">
            Enquiries List
          </Link>
        </div>
      </div>
    </div>
  );
}
