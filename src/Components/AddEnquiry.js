import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Enquire() {
  let { id } = useParams();
  const [courseid,SetCourseid]= useState(id);
  console.log(courseid);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const initialUserState = {
    id: 0,
    courseid:courseid,
    name: "",
    email: "",
  };

  const navigate = useNavigate();
  const [enquiry, setEnquiry] = useState(initialUserState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEnquiry({ ...enquiry, [name]: value });
  };


  function SubmitEnquiry() {
    axios
      .post("http://localhost:5000/Enquires/", enquiry)
      .then((result) => {
        console.log(result);
        alert("Enquiry details saved successfully.");
        navigate("/Courses");
      })
      .catch((error) => {
        console.error("Error while submitting enquiry", error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    SubmitEnquiry();

  };

  return (
    <div>
      <h1>Enquire</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"> Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={enquiry.name}
            onChange={handleInputChange}
            placeholder="Please enter your Name"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={enquiry.email}
            onChange={handleInputChange}
            placeholder="Please enter your Email"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label"> Any Question? </label>
          <textarea
            type="message"
            id="message"
            name="message"
            className="form-control"
            value={enquiry.message}
            onChange={handleInputChange}
            placeholder="Please enter your query"
          ></textarea>
        </div>
        <div>
          <Link to="/Courses" className="btn btn-secondary">
            Courses List
          </Link>
          &nbsp;
          <button type="submit" className="btn btn-success">
            Add New User Enquiry
          </button>{" "}
          &nbsp;
          <button type="reset" className="btn btn-danger">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
