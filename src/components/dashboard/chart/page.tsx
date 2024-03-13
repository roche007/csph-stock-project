"use client"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '1',
      Super: 4000,
      Gasoil: 2400,
      Gaz: 3000,
      Petrol: 500,
      amt: 2400,
    },
    {
      name: '2',
      Super: 3000,
      Gasoil: 1398,
      Gaz: 2000,
      Petrol: 1000,
      amt: 2210,
    },
    {
      name: '3',
      Super: 2000,
      Gasoil: 9800,
      Gaz: 5000,
      Petrol: 1000,
      amt: 2290,
    },
    {
      name: '4',
      Super: 2780,
      Gasoil: 3908,
      amt: 2000,
      Gaz: 3000,
      Petrol: 6000,
    },
    {
      name: '5',
      Super: 1890,
      Gasoil: 4800,
      amt: 2181,
      Gaz: 2000,
      Petrol: 1000,
    },
    {
      name: '6',
      Super: 2390,
      Gasoil: 3800,
      amt: 2500,
      Gaz: 7000,
     Petrol: 900,
    },
    {
      name: '7',
      Super: 3490,
      Gasoil: 4300,
      amt: 2100,
      Gaz: 1000,
      Petrol: 9000,
    },
    {
        name: '8',
        Super: 4000,
        Gasoil: 2400,
        amt: 2400,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '9',
        Super: 3000,
        Gasoil: 1398,
        amt: 2210,
        Gaz: 500,
        Petrol: 4000,
      },
      {
        name: '10',
        Super: 2000,
        Gasoil: 9800,
        amt: 2290,
        Gaz: 3000,
       Petrol: 6000,
      },
      {
        name: '11',
        Super: 2780,
        Gasoil: 3908,
        amt: 2000,
        Gaz: 500,
        Petrol: 4000,
      },
      {
        name: '12',
        Super: 1890,
        Gasoil: 4800,
        amt: 2181,
        Gaz: 500,
        Petrol: 4000,
      },
      {
        name: '13',
        Super: 2390,
        Gasoil: 3800,
        amt: 2500,
        Gaz: 500,
        Petrol: 3000,
      },
      {
        name: '14',
        Super: 3490,
        Gasoil: 4300,
        amt: 2100,
        Gaz: 50,
        Petrol: 4000,
      },
      {
        name: '15',
        Super: 4000,
        Gasoil: 2400,
        amt: 2400,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '16',
        Super: 3000,
        Gasoil: 1398,
        amt: 2210,
        Gaz: 5000,
        Petrol: 4000,
      },
      {
        name: '17',
        Super: 2000,
        Gasoil: 9800,
        amt: 2290,
        Gaz: 1100,
        Petrol: 4000,
      },
      {
        name: '18',
        Super: 2780,
        Gasoil: 3908,
        amt: 2000,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '19',
        Super: 1890,
        Gasoil: 4800,
        amt: 2181,
        Gaz: 100,
        Petrol: 300,
      },
      {
        name: '20',
        Super: 2390,
        Gasoil: 3800,
        amt: 2500,
        Gaz: 500,
        Petrol: 300,
      },
      {
        name: '21',
        Super: 3490,
        Gasoil: 4300,
        amt: 2100,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '22',
        Super: 4000,
        Gasoil: 2400,
        amt: 2400,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '23',
        Super: 3000,
        Gasoil: 1398,
        amt: 2210,
        Gaz: 500,
        Petrol: 400,
      },
      {
        name: '24',
        Super: 2000,
        Gasoil: 9800,
        amt: 2290,
        Gaz: 500,
        Petrol: 350,
      },
      {
        name: '25',
        Super: 2780,
        Gasoil: 3908,
        amt: 2000,
        Gaz: 500,
        Petrol: 200,
      },
      {
        name: '26',
        Super: 1890,
        Gasoil: 4800,
        amt: 2181,
        Gaz: 500,
        Petrol: 450,
      },
      {
        name: '27',
        Super: 2390,
        Gasoil: 3800,
        amt: 2500,
        Gaz: 200,
        Petrol: 400,
      },
      {
        name: '28',
        Super: 3490,
        Gasoil: 4300,
        amt: 2100,
        Gaz: 250,
        Petrol: 400,
      },
      {
        name: '29',
        Super: 3490,
        Gasoil: 4300,
        amt: 2100,
        Gaz: 250,
        Petrol: 400,
      }, 
      {
        name: '30',
        Super: 3490,
        Gasoil: 4300,
        amt: 2100,
        Gaz: 250,
        Petrol: 400,
      },
    ];

export default function Chart() {
    return (
      <div className="w-200 h-80 pb-10 flex flex-col border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow rounded-xl cursor-pointer">
          <span className=" font-bold items-center justify-center flex mb-4">
              Summaire des ventes pour les 30 derniers jours
          </span>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  background: "#FFFAED",
                  borderRadius: "0.575rem",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "0.5rem" 
                  
                  }} />
              <Legend />
              <Line type="monotone" dataKey="Gasoil" stroke="#ED8B22" strokeWidth={1.5} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Super" stroke="#389DC7" strokeWidth={1.5}/>
              <Line type="monotone" dataKey="Gaz" stroke="#624626" strokeWidth={1.5}/>
              <Line type="monotone" dataKey="Petrol" stroke="#066D2A" strokeWidth={1.5}/>
            </LineChart>
          </ResponsiveContainer>
      </div>
    )
}