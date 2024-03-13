"use client"
import React, { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';

const data = [
  { name: 'Super', value: 400, fill: '#389DC7' },
  { name: 'Gasoil', value: 300, fill: '#ED8B22' },
  { name: 'Petrol', value: 300, fill: '#066D2A' },
  { name: 'Gaz', value: 200, fill: '#624626' },
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const outerRadiusAdjusted = outerRadius + 10;
  const innerRadiusAdjusted = innerRadius + 6;
  const mx = cx + outerRadiusAdjusted * cos;
  const my = cy + outerRadiusAdjusted * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadiusAdjusted}
        outerRadius={outerRadiusAdjusted}
        fill={fill}
      />
      <path d={`M${cx},${cy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`L ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function Chart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: any) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-[400px] h-[200px] flex flex-col items-center border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer">
        <span className="font-bold items-center justify-center flex">
          Pourcentage de ventes du jour
        </span>
        <ResponsiveContainer width="95%" height="70%" className="">
          <PieChart width={400} height={400}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={43}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
  );
}
