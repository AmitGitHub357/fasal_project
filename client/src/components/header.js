import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getMovieListBySearch } from "../redux/movies/moviesAction";
import { Logout } from '../redux/user/userAction'
const Header = () => {
  const state = useSelector((state) => state.userSignIn);
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const { userInfo } = state;
  // const [search,setSearch] = useState({
  //   status : false,
  //   searchData : ''
  // })

  // console.log(userInfo);
  const logOutHandler = (e) => {
    e.preventDefault()
    dispatch(Logout())
    // console.log(userInfo);
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Metromindz
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/contact" className="nav-item nav-link">
                Contact
              </a>
              {userInfo && userInfo.status === 200 ? (
                <a className="nav-item nav-link border-0 bg-transparent" onClick={e => logOutHandler(e)}>
                  Logout
                </a>
              ) : (

                <>
                  <a href="/login" className="nav-item nav-link">
                    Login
                  </a>
                  <a href="/sign_up" className="nav-item nav-link">
                    Sign Up
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
