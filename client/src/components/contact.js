import axios from "axios";
import React,{ useState } from "react"
import { useSelector,useDispatch } from "react-redux";
import { sendEmail } from "../redux/movies/moviesAction";
const Contact = () => {
  const [email,setEmail] = useState("")
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const sendMailHandler = (e) => {
    e.preventDefault()
    dispatch(sendEmail({email : email}))
    console.log(state)
    // if(state.sendEmail)
  }

  return (<>
    <div className="container mt-5" >
      {/* <!-- <div id="header"></div> --> */}
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-6">
        <h3 className="text-center">Contact Us</h3>
          <form>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                
                type="text"
                className="form-control mt-3"
                id="signUpName"
                placeholder="Enter Name..."
              />
            </div>
            
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                onChange={ e => setEmail(e.target.value) }
                
                type="email"
                className="form-control mt-3"
                id="signUpEmail"
                placeholder="Enter Email...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Phone</label>
              <input
                
                type="number"
                className="form-control mt-3"
                id="signUpNumber"
                placeholder="Enter Phone Number...."
              />
            </div>
            <div className="form-group mt-3">
              <label>Feedback</label>
              <textarea className="form-control mt-3" style={{resize:"none"}} rows="3"> </textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mr-3" onClick={(e) => sendMailHandler(e)}>Submit</button>
          </form>
        </div>
        <div className="col-md-6 col-sm-6 mt-5">
          <img src="https://www.acv.app/static/media/RemoteTeamAnimate.9bc87be4.svg" />
        </div>
      </div>
    </div>
    </>)
  }

  export default Contact