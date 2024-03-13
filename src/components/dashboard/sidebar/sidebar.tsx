"use client"
import React, { useState } from 'react';
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

  const menuItems = [
    {
      title: 'Général',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard/' + DASHBOARD_SCREENS[0],
          icon: <TiVendorMicrosoft />,
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

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-5 ">
        <img src="/assets/img/Arda_Member_Logos_csph 1.png" alt="LOGO CSPH" />
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="font-bold text-sm m-2 text-goldern-brown cursor-pointer" onClick={() => toggleCategory(cat.title)}>
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
          </li>
        ))}
      </ul>
      <button className="p-2 flex items-center cursor-pointer justify-between text-dark-green mb-5"><TbLogout /> 
      <span className="p-1 text-dark-green">Log Out</span>
      </button>
    </div>
  );
};

export default SideBarPage;
