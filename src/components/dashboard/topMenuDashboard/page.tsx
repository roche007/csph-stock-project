"use client"

import React, { useState } from 'react';
import { FaGlobeAfrica } from 'react-icons/fa';
import { MdCalendarMonth } from 'react-icons/md';
import { GiFuelTank } from 'react-icons/gi';
import { DASHBOARD_SCREENS, MARKETEUR_SCREENS, STRUCTURE_SCREENS, QUARTIER_SCREENS, REGION_SCREENS, VILLE_SCREENS } from "@/constants/dashboard"
import { useRouter } from 'next/navigation';

interface PropsTypes {
  currentScreen: string
}
const TopMenuDashboard:React.FC<PropsTypes> = ({ currentScreen }) => {
  const router = useRouter()
  
  const [selectedOption, setSelectedOption] = useState(DASHBOARD_SCREENS[0]);
  const [options, setOptions] = useState<string[]>([]); // Annotation de type explicite

  const handleMenuClick = (option: string) => {
    switch (option) {
    case 'Marketeur':
        setSelectedOption(option);
        setOptions(['TotalEnergies', 'Neptune', 'Tradex', 'Gulfin']);
        break;
      case 'Quartier':
        setSelectedOption(option);
        setOptions(['Enguissa', 'Ekounou']);
        break;
      case 'Entreprise':
        setSelectedOption(option);
        setOptions(['SCDP', 'MARKETEUR', 'STRUCTURE']);
        break;
      case 'Date':
        setSelectedOption(option);
        setOptions(['02.12.23']);
        break;
      default:
        setSelectedOption('');
        setOptions([]);
    }
  };

  const handleOnChangeScreen = (value: string) => {
    setSelectedOption(value)
    if(value == DASHBOARD_SCREENS[0]){
      router.push("/dashboard/"+ value)
    }
  }

  const handleOnChangeMarketeur = (value: string) => {
    router.push("/dashboard/"+value)
  }

  const handleOnChangeStructure = (value: string) => {
    router.push("/dashboard/"+value)
  } 

  const handleOnChangeRegion = (value: string) => {
    router.push("/dashboard/"+value)
  }

  const handleOnChangeVille = (value: string) => {
    router.push("/dashboard/"+value)
  }

  const handleOnChangeQuartier = (value: string) => {
    router.push("/dashboard/"+value)
  } 


  return (
    <div className="w-full px-2 py-5 flex flex-row justify-between">
  
      <span className="pl-5 text-2xl font-bold">
        {selectedOption == DASHBOARD_SCREENS[0]?"Entreprise":selectedOption} :
        <span className="text-dark-green"> {currentScreen}</span>
      </span>

      <div className="flex flex-row gap-2 items-center">
        <GiFuelTank /> <span className="p-0">Entreprise</span> 
        <select name="dashboard-screen" id="" className="" onChange={(e)=>handleOnChangeScreen(e.target.value)}>
          <option value="" disabled selected hidden>Choisir votre section...</option>
            {
              DASHBOARD_SCREENS.map((screen:string)=>{
                return <option key={screen} value={screen} className="">{screen}</option>
              })
            }
        </select>
      </div>

      {selectedOption == DASHBOARD_SCREENS[1] && <div className="flex flex-row gap-2 items-center">
        <GiFuelTank /> <span className="p-0">Marketeur</span> 
        <select name="dashboard-screen" id="" className="" onChange={(e)=>handleOnChangeMarketeur(e.target.value)}>
        <option value="" disabled selected hidden>Choisir votre marketeur...</option>
            {
              MARKETEUR_SCREENS.map((screen:string)=>{
                return <option key={screen} value={screen} className="">{screen}</option>
              })
            }
        </select>
      </div>}
      

      {selectedOption == DASHBOARD_SCREENS[1] && <div className="flex flex-row gap-2 items-center">
      <FaGlobeAfrica /> <span className="p-0">Region</span> 
        <select name="dashboard-screen" id="" className="" onChange={(e)=>handleOnChangeQuartier(e.target.value)}>
        <option value="" disabled selected hidden>Choisir votre Region...</option>
            {
              REGION_SCREENS.map((screen:string)=>{
                return <option key={screen} value={screen} className="">{screen}</option>
              })
            }
        </select>
      </div>}

      


        {selectedOption == DASHBOARD_SCREENS[2] && <div className="flex flex-row gap-2 items-center">
        <GiFuelTank /> <span className="p-0">Structure</span> 
        <select name="dashboard-screen" id="" className="" onChange={(e)=>handleOnChangeStructure(e.target.value)}>
        <option value="" disabled selected hidden>Choisir votre structure...</option>
            {
              STRUCTURE_SCREENS.map((screen:string)=>{
                return <option key={screen} value={screen} className="">{screen}</option>
              })
            }
        </select>
      </div>}

      {selectedOption == DASHBOARD_SCREENS[2] && <div className="flex flex-row gap-2 items-center">
      <FaGlobeAfrica /> <span className="p-0">Region</span> 
        <select name="dashboard-screen" id="" className="" onChange={(e)=>handleOnChangeQuartier(e.target.value)}>
        <option value="" disabled selected hidden>Choisir votre Region...</option>
            {
              REGION_SCREENS.map((screen:string)=>{
                return <option key={screen} value={screen} className="">{screen}</option>
              })
            }
        </select>
      </div>}

      {/* <div className="dropdown">
        <button className="dropdown-toggle menu__link mr-10 flex items-center space-x-4" onClick={() => handleMenuClick('Entreprise')}>
          <GiFuelTank /> <span className="p-0">Entreprise</span>
        </button>
        {selectedOption === 'Entreprise' && (
          <div className="dropdown-menu flex flex-col justify-center items-start">
            {options.map((option, index) => (
              <a key={index} href="#" className="dropdown-item text-goldern-brown">{option}</a>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropdown-toggle menu__link mr-10 flex items-center space-x-4" onClick={() => handleMenuClick('Marketeur')}>
          <GiFuelTank /> <span className="p-0">Marketeur</span>
        </button>
        {selectedOption === 'Marketeur' && (
          <div className="dropdown-menu flex flex-col justify-center items-start">
            {options.map((option, index) => (
              <a key={index} href="#" className="dropdown-item">{option}</a>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropdown-toggle menu__link mr-10 flex items-center space-x-4" onClick={() => handleMenuClick('Quartier')}>
          <FaGlobeAfrica /> <span className="p-0">Quartier</span>
        </button>
        {selectedOption === 'Quartier' && (
          <div className="dropdown-menu flex flex-col justify-center items-start">
            {options.map((option, index) => (
              <a key={index} href="#" className="dropdown-item">{option}</a>
            ))}
          </div>
        )}
      </div>
      <div className="dropdown">
        <button className="dropdown-toggle menu__link mr-10 flex items-center space-x-4" onClick={() => handleMenuClick('Date')}>
          <MdCalendarMonth /> <span className="p-0">Date</span>
        </button>
        {selectedOption === 'Date' && (
          <div className="dropdown-menu flex flex-col justify-center items-start">
            {options.map((option, index) => (
              <a key={index} href="#" className="dropdown-item">{option}</a>
            ))}
          </div>
        )}
      </div> */}
    </div>
    
  );
}

export default TopMenuDashboard