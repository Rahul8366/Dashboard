import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 350 },
  { name: 'Mar', value: 450 },
  { name: 'Apr', value: 300 },
  { name: 'May', value: 550 },
  { name: 'Jun', value: 400 },
];

const CustomBar = ({ x, y, width, height, fill }) => (
  <rect x={x} y={y} width={width} height={height} fill={`url(#${fill})`} />
);

const BarChartExample = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartExample;
