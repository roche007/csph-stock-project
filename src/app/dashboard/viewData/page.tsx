"use client"
import React, { useEffect, useState } from 'react';

interface DataItem {
    date: string;
    superRecu: string;
    superVendu: string;
    gasoilRecu: string;
    gasoilVendu: string;
    gazRecu: string;
    gazVendu: string;
}

export default function viewDataPage() {

    const initialData: DataItem[] = [
        { date: '22.03.2024',
          superRecu: '120000009', 
          superVendu: '878909', 
          gasoilRecu: '2909', 
          gasoilVendu: '23909', 
          gazRecu: '500', 
          gazVendu: '400' },
        {
            date: '22.03.2021',
            superRecu: '200000',
            superVendu: '100000',
            gasoilRecu: '50000',
            gasoilVendu: '30000',
            gazRecu: '1000',
            gazVendu: '500'
        },
        {
            date: '22.03.2023',
            superRecu: '500000',
            superVendu: '300000',
            gasoilRecu: '100000',
            gasoilVendu: '50000',
            gazRecu: '1000',
            gazVendu: '500'
        },
        {
            date: '22.03.2022',
            superRecu: '5000000000',
            superVendu: '3000000000',
            gasoilRecu: '1000000000',
            gasoilVendu: '500000000',
            gazRecu: '10000000',
            gazVendu: '5000'
        },
        { date: '22.03.2024',
        superRecu: '120000009', 
        superVendu: '878909', 
        gasoilRecu: '2909', 
        gasoilVendu: '23909', 
        gazRecu: '500', 
        gazVendu: '400' },
      {
          date: '22.03.2021',
          superRecu: '200000',
          superVendu: '100000',
          gasoilRecu: '50000',
          gasoilVendu: '30000',
          gazRecu: '1000',
          gazVendu: '500'
      },
      {
          date: '22.03.2023',
          superRecu: '500000',
          superVendu: '300000',
          gasoilRecu: '100000',
          gasoilVendu: '50000',
          gazRecu: '1000',
          gazVendu: '500'
      },
      {
          date: '22.03.2022',
          superRecu: '5000000000',
          superVendu: '3000000000',
          gasoilRecu: '1000000000',
          gasoilVendu: '500000000',
          gazRecu: '10000000',
          gazVendu: '5000'
      },
      { date: '22.03.2024',
      superRecu: '120000009', 
      superVendu: '878909', 
      gasoilRecu: '2909', 
      gasoilVendu: '23909', 
      gazRecu: '500', 
      gazVendu: '400' },
    {
        date: '22.03.2021',
        superRecu: '200000',
        superVendu: '100000',
        gasoilRecu: '50000',
        gasoilVendu: '30000',
        gazRecu: '1000',
        gazVendu: '500'
    },
    {
        date: '22.03.2023',
        superRecu: '500000',
        superVendu: '300000',
        gasoilRecu: '100000',
        gasoilVendu: '50000',
        gazRecu: '1000',
        gazVendu: '500'
    },
    {
        date: '22.03.2022',
        superRecu: '5000000000',
        superVendu: '3000000000',
        gasoilRecu: '1000000000',
        gasoilVendu: '500000000',
        gazRecu: '10000000',
        gazVendu: '5000'
    },
    { date: '22.03.2024',
    superRecu: '120000009', 
    superVendu: '878909', 
    gasoilRecu: '2909', 
    gasoilVendu: '23909', 
    gazRecu: '500', 
    gazVendu: '400' },
  {
      date: '22.03.2021',
      superRecu: '200000',
      superVendu: '100000',
      gasoilRecu: '50000',
      gasoilVendu: '30000',
      gazRecu: '1000',
      gazVendu: '500'
  },
  {
      date: '22.03.2023',
      superRecu: '500000',
      superVendu: '300000',
      gasoilRecu: '100000',
      gasoilVendu: '50000',
      gazRecu: '1000',
      gazVendu: '500'
  },
  {
      date: '22.03.2022',
      superRecu: '5000000000',
      superVendu: '3000000000',
      gasoilRecu: '1000000000',
      gasoilVendu: '500000000',
      gazRecu: '10000000',
      gazVendu: '5000'
  },
  { date: '22.03.2024',
  superRecu: '120000009', 
  superVendu: '878909', 
  gasoilRecu: '2909', 
  gasoilVendu: '23909', 
  gazRecu: '500', 
  gazVendu: '400' },
{
    date: '22.03.2021',
    superRecu: '200000',
    superVendu: '100000',
    gasoilRecu: '50000',
    gasoilVendu: '30000',
    gazRecu: '1000',
    gazVendu: '500'
},
{
    date: '22.03.2023',
    superRecu: '500000',
    superVendu: '300000',
    gasoilRecu: '100000',
    gasoilVendu: '50000',
    gazRecu: '1000',
    gazVendu: '500'
},
{
    date: '22.03.2022',
    superRecu: '5000000000',
    superVendu: '3000000000',
    gasoilRecu: '1000000000',
    gasoilVendu: '500000000',
    gazRecu: '10000000',
    gazVendu: '5000'
},
{ date: '22.03.2024',
superRecu: '120000009', 
superVendu: '878909', 
gasoilRecu: '2909', 
gasoilVendu: '23909', 
gazRecu: '500', 
gazVendu: '400' },
{
  date: '22.03.2021',
  superRecu: '200000',
  superVendu: '100000',
  gasoilRecu: '50000',
  gasoilVendu: '30000',
  gazRecu: '1000',
  gazVendu: '500'
},
{
  date: '22.03.2023',
  superRecu: '500000',
  superVendu: '300000',
  gasoilRecu: '100000',
  gasoilVendu: '50000',
  gazRecu: '1000',
  gazVendu: '500'
},
{
  date: '22.03.2022',
  superRecu: '5000000000',
  superVendu: '3000000000',
  gasoilRecu: '1000000000',
  gasoilVendu: '500000000',
  gazRecu: '10000000',
  gazVendu: '5000'
}
    ];

    const [data, setData] = useState<DataItem[]>(initialData);
    const [filteredData, setFilteredData] = useState<DataItem[]>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedChiffre, setSelectedChiffre] = useState<string>('');

    const handleFilter = (filterType: string) => {
        switch (filterType) {
            case 'Date':
                setFilteredData(data.filter(item => item.date === selectedDate));
                break;
                case 'Chiffre':
                setFilteredData(data.filter(item => parseInt(item.superVendu) > parseInt(selectedChiffre)));
                break;
                default:
                    setFilteredData([]);
            }
        };

    useEffect(()=>{
        setFilteredData(data.filter(item => item.date === selectedDate));
    },[selectedDate])


    return (
        <div className="h-[calc(100%-50px)]">
        <div className="p-10 h-[calc(100%-1px)]">
        <div className="p-10 border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">
            <span className="ont-bold text-lg m-100 text-goldern-brown"> Stock reccords DA </span>

            <div className="flex flex-col justify-items-end mb-3 ">
                <div className=" ">
                <select
                            className="absolute left-0 mb-5 w-[55] bg-white border border-gray-300 rounded-lg shadow-md outline-none"
                            onChange={(e) => {
                                setSelectedDate(e.target.value);
                                handleFilter('Date');
                            }}
                        >
                            <option value="">Choisissez une date</option>
                            {data.map((item, index) => (
                                <option key={index} value={item.date}>
                                    {item.date}
                                </option>
                            ))}
                        </select>
                </div>

            </div>
            <div className=" flex flex-row justify-center items-center">
            <table className="mt-5 ">
            <thead className="">
                <tr className="divide-x divide-gray-300 bg-dark-green">
                    <th className="px-4 py-2 text-center">Date</th>
                    <th className="px-4 py-2 text-center">Super Reçu/L</th>
                    <th className="px-4 py-2 text-center">Super Vendu/L</th>
                    <th className="px-4 py-2 text-center">Gasoil Reçu/L</th>
                    <th className="px-4 py-2 text-center">Gasoil Vendu/L</th>
                    <th className="px-4 py-2 text-center">Gaz Reçu/B</th>
                    <th className="px-4 py-2 text-center">Gaz Vendu/B</th>
                </tr>
            </thead>
            <tbody className="">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 text-center">{item.date}</td>
                                    <td className="px-4 py-2 text-center">{item.superRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.superVendu}</td>
                                    <td className="px-4 py-2 text-center">{item.gasoilRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.gasoilVendu}</td>
                                    <td className="px-4 py-2 text-center">{item.gazRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.gazVendu}</td>
                                </tr>
                            ))
                        ) : (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 text-center">{item.date}</td>
                                    <td className="px-4 py-2 text-center">{item.superRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.superVendu}</td>
                                    <td className="px-4 py-2 text-center">{item.gasoilRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.gasoilVendu}</td>
                                    <td className="px-4 py-2 text-center">{item.gazRecu}</td>
                                    <td className="px-4 py-2 text-center">{item.gazVendu}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
            
        </table>
        </div>
    </div>
    
        </div>
</div>
        
    )
}