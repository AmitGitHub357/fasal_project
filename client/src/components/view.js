import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProject,
  filterList,
  deleteProject,
  updateProject,
} from "../redux/project/projectAction";
import { Link, useNavigate } from "react-router-dom";
const View = () => {
  const [order, setOrder] = useState({
    orderStatus: "none",
  });
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.listProject.projectList);
  const filterData = useSelector((state) => state);
  // useEffect(() => {
  //   if (!userInfo) {
  //     navigate("/");
  //   }
  // }, [userInfo]);

  useEffect(() => {
    dispatch(filterList(filterStatus));
  }, [filterStatus]);

  useEffect(() => {
    if (order.orderStatus == "none")
      setList(filterData)
    if (order.orderStatus == "asc") {
      setList(filterData && filterData.filterList && filterData.filterList.projectList && filterData.filterList.projectList.projectList && filterData.filterList.projectList.projectList.sort((a, b) => {
        return a.name && a.name.localeCompare(b.name)
      }))
    }
     if (order.orderStatus == "desc") {
      setList(filterData.filterList.projectList && filterData.filterList.projectList.projectList && filterData.filterList.projectList.projectList.sort((b, a) => {
        return a.name.localeCompare(b.name)
      }))
    }
  }, [filterData, order.orderStatus]);

  console.log(list)
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteProject(id));
  };

  const updateHandler = (e, id) => {
    e.preventDefault();
    localStorage.setItem("updateId", id);
    navigate("/edit");
  };
  // console.log(list)
  return (
    <>
      <div className="container mt-3">
        <h2>Projects</h2>
        <p>Filter</p>
        <div className="col-md-4 row ">
          <div className="col-md-6">
            <select
              className="form-control text-center"
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              className="form-control text-center"
              onChange={(e) => {
                setOrder({ orderStatus: e.target.value });
              }}
            >
              <option value="none">None</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Images</th>
              <th>Description</th>
              <th>Status</th>
              <th colSpan={2} className="text-center">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {list.filterList &&
              list.filterList.projectList &&
              list.filterList.projectList.projectList &&
              list.filterList.projectList.projectList.length > 0 ? (
              list.filterList.projectList.projectList.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <img src='#' />
                    </td>
                    <td>{item.description}</td>
                    <td>{item.projectStatus}</td>
                    <td>
                      <button
                        className="btn text-danger bg-white"
                        onClick={(e) => deleteHandler(e, item._id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to="/edit">
                        <button
                          className="btn bg-secondary text-white"
                          onClick={(e) => updateHandler(e, item._id)}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="12"> No Records</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <Link to="/">
            <button className="btn btn-dark">Add Project</button>
          </Link>
          <Link to="/projectView">
            <button className="btn btn-success">Project View</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default View;