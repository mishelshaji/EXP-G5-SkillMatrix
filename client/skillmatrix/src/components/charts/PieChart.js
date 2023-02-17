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

const PieChartApp = () => {
  const data = [
    {
      name: "Facebook",
      users: 20000
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
        <PieChart width={350} height={350}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartApp;