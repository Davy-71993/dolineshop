"use client"

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function MyLineChart() {
    const data = [
        {
          name: 'Mon',
          Sales: 4000,
          Purchaeses: 2400,
          amt: 2400,
        },
        {
          name: 'Tue',
          Sales: 3000,
          Purchaeses: 1398,
          amt: 2210,
        },
        {
          name: 'Wed',
          Sales: 2000,
          Purchaeses: 9800,
          amt: 2290,
        },
        {
          name: 'Thur',
          Sales: 2780,
          Purchaeses: 3908,
          amt: 2000,
        },
        {
          name: 'Fri',
          Sales: 1890,
          Purchaeses: 4800,
          amt: 2181,
        },
        {
          name: 'Sat',
          Sales: 2390,
          Purchaeses: 3800,
          amt: 2500,
        },
        {
          name: 'Sun',
          Sales: 3490,
          Purchaeses: 4300,
          amt: 2100,
        },
      ];
    return (
      <ResponsiveContainer  className="w-full h-full">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Purchaeses" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  