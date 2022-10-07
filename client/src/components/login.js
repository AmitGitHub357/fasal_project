import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/user/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } =  userSignIn ;
  useEffect(() => {
    console.log(userInfo)
    if (userInfo && userInfo.status == 200 && userInfo.success == true) navigate("/allUserMovieslist");
  }, [userInfo]);
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(userLogin(email, password));
      // console.log(userSignIn)
      if (userSignIn.userInfo.status == 401) {
        alert("something wrong login again");
        navigate("/login");
      } else if (userSignIn.userInfo && userSignIn.userInfo.status === 200) {
        alert(userSignIn.userInfo.message);
        navigate("/allUserMovieslist/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 ">
          <form>
            <div className="form-group">
              <h2 className="text-center">Login</h2>
              <p>Email address</p>
              <input
                type="email"
                className="form-control mt-3"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mt-3"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 mr-3"
              onClick={(e) => submitHandler(e)}
            >
              Submit
            </button>         
          </form>
        </div>
        <div className="col-md-6 ">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
  );
};

export default Login;
