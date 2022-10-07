import axios from "axios";
import React, { useState } from "react";

const CompanyList = () => {
  const [list, setList] = useState([]);
  useState(() => {
    axios.get("http://localhost:5000/api/company").then((res) => {
      setList(list);
    });
  }, []);
  return (
    <>
      <select>
        {typeof list.CompanyList !== "undefined" ? (
          list.CompanyList.map((item) => {
            return
            <option value={item._id}>{item.companyName}</option>;
          })
        ) : (
          <p>Undefined</p>
        )}
      </select>
    </>
  );
};

export default CompanyList;
