import React, { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");

  const data = {
    name,
    email,
    phone,
    status,
    gender,
  };
  
  const insertHandler = () => {
    axios
      .post(" http://localhost:5000/api/goals/",data)
      .then((res) => alert(`${name} Data Inserted Successfully `));
  };
  return (
    <div className="container mt-3">
      <h2 className="text-center">Insert form</h2>
      <h4>
        <a href="/" className="text-end">
          View Users
        </a>
      </h4>
      <form action="">
        <div className="mt-5">
          <label for="">Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3 mt-3">
          <label for="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
        </div>

        <div className="mb-3 ">
          <label for="">gender : </label>
          {/* <div class="form-check form-check-inline"> */}
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            id="inlineRadio1"
            value="Male"
          />
          Male
          {/* </div> */}
          {/* <div class="form-check form-check-inline"> */}
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="inlineRadio2"
            value="Female"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          Female
        </div>
        {/* </div> */}
        <div className="mb-3">
          <label for="">Phone:</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label for="">status</label>
          <select
            name="status"
            className="form-select"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            value={status}
          >
            <option value="null">Select</option>
            <option value="Active">Active</option>
            <option value="Deactive">Deactive</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={insertHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Insert;
