import React, { useEffect, useState } from "react";
import axios from "axios";

const Demo = () => {
  const [list, setList] = useState([]);
  const [list1, setList1] = useState([]);

  const [order,setOrder] = useState({
    status : 'none'
  })
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/project")
      .then((res) => setList(res.data));
  }, []);
  // console.log(list.ProjectList[0].name)
  if(typeof(list.ProjectList) !== 'undefined'){ 
    if(order.status === 'asc')
    {
      setList(list.ProjectList.sort((a, b) => {
        return a.name.localeCompare(b.name)  
      }))
    }
    else if(order.status === 'desc')
    {
      setList(list.ProjectList.sort((b, a) => {
        return a.name.localeCompare(b.name)  
      }))
    }
    else if(order.status === 'none')
    {

    }
    // const result = list.ProjectList.sort((b, a) => {
    // return a.name.localeCompare(b.name);


  // console.log(result)
}
  return (
    <div>
        <select onChange={(e) => setOrder({ status : e.target.value })}>
          <option value='none'>none</option>
          <option value='asc'>asc</option>
          <option value='desc'>desc</option>
        </select>
    </div>
  );
};

export default Demo;
