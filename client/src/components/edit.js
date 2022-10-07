import { React, useState, useEffect, useInsertionEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateProject, getProjectById } from "../redux/project/projectAction";
const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.getProjectById);
  const state1 = useSelector((state) => state);
  const [id, setEditId] = useState(localStorage.getItem("updateId"));
  const [sList, setSList] = useState([]);
  const [name, setName] = useState("");
  const [images, setImg] = useState([]);
  const [projectStatus, setprojectStatus] = useState("Upcoming");
  const [description, setDescription] = useState("");
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(getProjectById(id));
    setSList(state.editList && state.editList.list);
  }, []);

  useEffect(() => {
    sList && setName(sList.name)
  }, [sList])
  // console.log(sList)
  const updateHandler = (e) => {  
    e.preventDefault();
    dispatch(
      updateProject({
        name: name,
        projectStatus: projectStatus,
        images: images,
        description: description,
        _id: id,
      })
    );
    localStorage.removeItem("updateId", "");
    alert("Data Updated Succefully ")
    navigate('/view')
    // console.log(state1)
  };

  return (
    <>
      <div className="container">
        <div className="my-5 justify-content-center row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h2 className="text-center">Update Project</h2>
            </div>
            <div className="row">
              <div className="col-md-2 my-5 text-center">
                <p>Name</p>
                <input
                  required
                  type="text"
                  className="form-control"
                  value={name}
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
                  value={projectStatus}
                  required
                  className="form-control text-center"
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
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              ></textarea>
              <button
                className="btn btn-dark my-5"
                onClick={(e) => updateHandler(e)}
              >
                Update Project
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
export default Edit;
