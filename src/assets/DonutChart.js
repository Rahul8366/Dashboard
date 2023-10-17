import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import App from './../App';

const data = [
  { name: 'Red', value: 30 },
  { name: 'Green', value: 60 },
  { name: 'white', value: 20 },
];

const COLORS = ['#FF6384', '#f2f2f2', '#FFCE56'];

const centerText = "Center Text "; // Your text here

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{`${data.name}: ${data.value}`}</p>
      </div>
    );
  }
  return null;
};

const PieChartExample = () => {
  return (
    <div className="pie-chart-container">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={100}
          innerRadius={70}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text x={200} y={100} textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="white">
        <tspan x="200" dy="0">{centerText}</tspan>
          <tspan x="200" dy="20">65%</tspan>
        </text>
        {/* Add a custom tooltip */}
        <CustomTooltip />
      </PieChart>
    </div>
  );
};

export default PieChartExample;
