import axios from "axios";
import React, { useEffect, useState } from "react";
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

const PieChartApp = () => {

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
        <PieChart width={350} height={350}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={modifiedarr}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#fff6"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartApp;