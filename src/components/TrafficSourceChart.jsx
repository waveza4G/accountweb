import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = {
  "รายรับ": 'green',
  "รายจ่าย": 'red',
  "เงินเก็บ": 'orange',
  "No Data": '#CCCCCC' // สีเทาสำหรับกรณีไม่มีข้อมูล
};

function TrafficSourceChart({ data }) {
  // ถ้าไม่มีข้อมูล ให้ใช้ข้อมูลเริ่มต้นที่เป็นสีเทา
  const hasData = data && data.length > 0;
  const chartData = hasData 
    ? data.map(item => ({
        name: item.type,
        value: Math.abs(item.amount),
      })) 
    : [{ name: "No Data", value: 1 }];

  // กำหนด Legend ให้แสดงเพียงค่าเดียวในแต่ละประเภท
  const uniqueLegend = [
    { value: "รายรับ", type: "square", color: COLORS["รายรับ"] },
    { value: "รายจ่าย", type: "square", color: COLORS["รายจ่าย"] },
    { value: "เงินเก็บ", type: "square", color: COLORS["เงินเก็บ"] },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        label={hasData ? undefined : { value: 'No Data', position: 'center' }}
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend payload={uniqueLegend} />
    </PieChart>
  );
}

export default TrafficSourceChart;
