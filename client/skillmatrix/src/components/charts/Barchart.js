import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const BarChartApp = () => {
  const [reportdata,setReportData]=useState([]);
  console.log(reportdata);
  useEffect(()=>{
  axios.get("https://localhost:7227/api/Admin/Report")
  .then((res)=>{
   setReportData(res.data)
   console.log(res.data);
  })
 },[]);
 let modifiedarr=[];
 reportdata.forEach(x=>
   {
     modifiedarr.push({
       'name':x.skillName,
       'users':x.count
     })
   })
   console.log(modifiedarr);
  
    return (
      <div style={{ textAlign: "center" }}>
        <div className="App">
          <BarChart
            width={400}
            height={200}
            data={modifiedarr}
            margin={{
              top: 50,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#fff6" }} />
          </BarChart>
        </div>
      </div>
    );
};
export default BarChartApp;