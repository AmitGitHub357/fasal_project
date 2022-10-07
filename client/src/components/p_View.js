import React, { useEffect, useState } from "react";
import { Link ,useParams} from "react-router-dom";
import axios from "axios";

const P_View = () => {
  const [singleList,setSingleList] = useState([])
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/goals/${params.id}`).then((res => setSingleList(res.data)))
  }, [params.id]);

 
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">User Data</h2>
        <a href="/">View Users</a>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>status</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <>
              <tr className="text-center">
                <td>{singleList.name} </td>
                <td>{singleList.email} </td>
                <td>{singleList.gender} </td>
                <td>{singleList.phone} </td>
                <td>{singleList.status} </td>
                
                {/* <td>
                    <button
                      onClick={(e) => {
                        editHandler(e, val._id);
                      }}
                    >
                      Edit
                    </button>
                  </td> */}
                <td>
                  <button className="btn btn-secondary"><Link className=" text-dark" to={`/edit/${params.id}`}>Edit</Link></button>
                </td>
                
              </tr>
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default P_View;
