import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../redux/user/userAction";
const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { userInfo } = state.userSignUp;
  // const userSignIn = state.userSignIn;
  
  useEffect(() => {
    // if (userSignIn) { 
    //   console.log(userSignIn)
    //   navigate("/");
    // }
// 
  });
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userRegister(name,dob,email,password));
    
    if(userInfo && userInfo.message == "Existing user" && userInfo.status == 400 )
    {
      alert(userInfo.message)
    }
    if(userInfo && userInfo.status == 201)
    {
        alert('registered Successfully redirecting to login Page')
        navigate('/login')
    }
  };
  return (
    <>
      <div className="container mt-5">
        {/* <!-- <div id="header"></div> --> */}
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-6">
            <h3 className="text-center">Sign-Up</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                className="form-control mt-3"
                id="signUpName"
                placeholder="Enter Name..."
              />
            </div>
            <div className="form-group mt-3">
              <label>Date Of Birth</label>
              <input
                onChange={(e) => setDob(e.target.value)}
                required
                type="date"
                className="form-control mt-3"
                id="signUpDob"
                placeholder="Enter Date of Birth"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="form-control mt-3"
                id="signUpEmail"
                placeholder="Enter Email...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="text"
                className="form-control mt-3"
                id="signUpPassword"
                placeholder="Enter Password...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Retype-Password</label>
              <input
                required
                type="password"
                className="form-control mt-3"
                id="signUpReTypePassword"
                placeholder="Enter Password...."
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mr-3 mt-3"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>
          </div>
          <div className="col-md-6 col-sm-6 mt-5">
            <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_Up;
