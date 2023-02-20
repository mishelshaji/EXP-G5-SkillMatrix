import React from "react";
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
    const data = [
      {
         name: "Facebook", 
         users: 2000
     },
     { 
        name: "Instagram",
        users: 15000
     },
    { 
        name: "Twiter", 
        users: 10000
    },
    { 
        name: "Telegram", 
       users: 50000
     },
    ];
  
    return (
      <div style={{ textAlign: "center" }}>
        <div className="App">
          <BarChart
            width={400}
            height={200}
            data={data}
            margin={{
              top: 40,
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
            <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    );
};
export default BarChartApp;