"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'; 
import { DASHBOARD_SCREENS } from '@/constants/dashboard';
import MenuLink from './menuLink/menuLink';
import { TbReportAnalytics } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";
import { BiMessageRoundedDots } from "react-icons/bi";
import { TbHelpOctagon } from "react-icons/tb";
import { VscTasklist } from "react-icons/vsc";
import { TbLogout } from "react-icons/tb";
import { BsPersonVcardFill } from "react-icons/bs";
import { FcStatistics } from "react-icons/fc";
import { BsFillDatabaseFill } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { TiVendorMicrosoft } from "react-icons/ti";
import { VscGistSecret } from "react-icons/vsc";
import { GoOrganization } from "react-icons/go";

const SideBarPage = () => {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const toggleCategory = (title: string) => {
    setOpenCategories((prevOpenCategories) =>
      prevOpenCategories.includes(title)
        ? prevOpenCategories.filter((item) => item !== title)
        : [...prevOpenCategories, title]
    );
  };
  // const router = useRouter();

  const menuItems = [
    {
      title: 'Général',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard/' + DASHBOARD_SCREENS[0],
          icon: <TiVendorMicrosoft />,
        },
        {
          title: 'Depot',
          path: '/dashboard/depot',
          icon: <CiViewList />,
        },
        {
          title: 'Marketeur',
          path: '/dashboard/marketeur',
          icon: <CiViewList />,
        },
        {
          title: 'Station',
          path: '/dashboard/station',
          icon: <CiViewList />,
        },
        {
          title: 'Transporteur',
          path: '/dashboard/transporteur',
          icon: <CiViewList />,
        },
        {
          title: 'Vehicule',
          path: '/dashboard/vehicule',
          icon: <CiViewList />,
        },
        {
          title: 'Chauffeur',
          path: '/dashboard/chauffeur',
          icon: <CiViewList />,
        },
        {
          title: 'Client',
          path: '/dashboard/client',
          icon: <CiViewList />,
        },
      ],
    },
    {
      title: 'Données',
      list: [
        {
          title: 'FillData',
          path: '/dashboard/filldata',
          icon: <BsFillDatabaseFill />,
        },
        {
          title: 'View Data',
          path: '/dashboard/viewData',
          icon: <CiViewList />,
        },
      ],
    },
    {
      title: 'Analyse',
      list: [
        {
          title: 'Rapport',
          path: '/dashboard/repport',
          icon: <TbReportAnalytics />,
        },
        {
          title: 'Stocks',
          path: '/dashboard/stock',
          icon: <AiOutlineStock />,
        },
        {
          title: 'statistics',
          path: '/dashboard/statistics',
          icon: <FcStatistics />,
        },
        {
          title: 'Prediction',
          path: '/dashboard/prediction',
          icon: <BsGraphUpArrow />,
        },
      ],
    },
    {
      title: 'User',
      list: [
        {
          title: 'Structure',
          path: '/dashboard/structure',
          icon: <GoOrganization />,
        },
        {
          title: 'Personnel',
          path: '/dashboard/personnel',
          icon: <BsPersonVcardFill />,
        },
        {
          title: 'Task',
          path: '/dashboard/task',
          icon: <VscTasklist />,
        },
        {
          title: 'Parametre',
          path: '/dashboard/parametre',
          icon: <RiSettings5Fill />,
        },
        {
          title: 'Message',
          path: '/dashboard/message',
          icon: <BiMessageRoundedDots />,
        },
        {
          title: 'Confidential',
          path: '/dashboard/filldata',
          icon: <VscGistSecret />,
        },
        {
          title: 'Help',
          path: '/dashboard/help',
          icon: <TbHelpOctagon />,
        },
      ],
    },
  ];

  /* const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/logout", null, {
        withCredentials: true
      });
      if (response.status === 200) {
        localStorage.removeItem('token');
        router.push("/");
      } else {
        console.error('Erreur lors de la déconnexion:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  }; */

  return (
    <div className="w-full h-[calc(100%-50px)] flex flex-col mt-16 ">
    <div className="flex flex-col items-center justify-center mb-30 fixed top-0 left-0 right-0 z-50 bg-background-yellow">
      <img src="/assets/img/Arda_Member_Logos_csph 1.png" alt="LOGO CSPH" />
    </div>

  <div className="overflow-y-auto h-[calc(100%-50px)] pb-20">
    {menuItems.map((cat) => (
      <div key={cat.title} className="mb-3">
        <div onClick={() => toggleCategory(cat.title)} className="rounded-lg m-2 border w-[90%] flex flex-col items-center justify-center border-background-yellow drop-shadow-2xl shadow-2xl bg-background-yellow">
          <span className="font-bold text-sm m-2 text-goldern-brown cursor-pointer">
            {cat.title}
          </span>
          {openCategories.includes(cat.title) && (
            <ul>
              {cat.list.map((item) => (
                <li key={item.title}>
                  <MenuLink item={item} key={item.title} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}
  </div>

  <div className="flex flex-col items-center justify-center mt-auto fixed bottom-0 left-0 right-0">
    <button className="p-2 flex items-center cursor-pointer justify-between text-dark-green" >
      <TbLogout />
      <span className="p-1 text-dark-green">Deconnecxion</span>
    </button>
  </div>
</div>

  );
};

export default SideBarPage;
