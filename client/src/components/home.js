import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CompanyList from "./list";
import { addProject } from "../redux/project/projectAction";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [images, setImg] = useState([]);
  const [projectStatus, setprojectStatus] = useState("Upcoming");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } =  userSignIn;
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);
  const addHandler = async (e) => {
    e.preventDefault();
    dispatch(
      addProject({
        name: name,
        projectStatus: projectStatus,
        images: images,
        description: description,
      })
    );

    console.log(userSignIn);
    console.log({
      name: name,
      projectStatus: projectStatus,
      images: images,
      description: description,
    });
  }
  return (
    <>
      <div className="container">
        <div className="my-5 justify-content-center row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h2 className="text-center">Add Project</h2>
            </div>
            <div className="row">
              <div className="col-md-2 my-5 text-center">
                <p>Name</p>
                <input
                  required
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-2 my-5 text-center">
                <p>Upload Project Image</p>
                <input
                  required
                  className="form-control"
                  type="file"
                  multiple
                  onChange={(e) =>
                    setImg((images) => [...images, e.target.value])
                  }
                />
              </div>
              <div className="col-md-2 my-5 text-center">
                <p>Select Project Status</p>
                <select
                  required
                  className="form-control text-center"
                  value={projectStatus}
                  onChange={(e) => setprojectStatus(e.target.value)}
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 ">
              <p>Project Description</p>
              <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              ></textarea>
              <button
                className="btn btn-dark my-5"
                onClick={(e) => addHandler(e)}
              >
                Add Project
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => navigate("/view")}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// // import { fetchUsers } from "../redux/users/userAction";

// const Home = (
//   // { fetchUsers, userData }
//   ) => {
//   // useEffect(() => {
//   //   if(fetchUsers())
//   //   {
//   //     console.log(fetchUsers())
//   //   }
//   // }, []);
//   // return userData.loading ? (
//   //   <h1>loading</h1>
//   // ) : userData.error ? (
//   //   <h1>{userData.error}</h1>
//   // ) : (
//     <div>
//       <div className="container">
//         <div className="my-5 ">
//           <h3 className="text-center">Our Users</h3>
//           <div>
//             <table className="border my-5">
//               <thead>
//                 <tr>
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Email</th>
//                   <th className="p-3"> role</th>
//                   <th className="p-3">Mobile</th>
//                   <th className="p-3">IsActive</th>
//                 </tr>
//               </thead>
//               <tbody>
//                   {/* { userData &&
//                     userData.users.map((user) => (
//                       <tr><td key={user.id}>{user.name} </td></tr>
//                     ))} */}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   // );
// };

// // const mapStateToProps = (state) => {
// //   return {
// //     userData: state.user,
// //   };
// // };

// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     fetchUsers: () => dispatch(fetchUsers()),
// //   };
// // };

export default Home;
// // connect(mapStateToProps, mapDispatchToProps)(Home);
