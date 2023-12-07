"use client"

import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Profits: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    Profits: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    Profits: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    Profits: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    Profits: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    Profits: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    Profits: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Mybarchart() {
    return (
      <ResponsiveContainer  className="w-full h-full">
        <BarChart width={150} height={40} margin={{
          left: 5,
          top: 5
        }} data={data}>
          <Bar dataKey="Profits" fill="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Cell />
        </BarChart>
      </ResponsiveContainer>
    );
}
