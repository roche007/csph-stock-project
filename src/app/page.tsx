"use client";

import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import {useRouter} from "next/navigation";
import { Axios } from "axios";
import Image from "next/image";
import { DASHBOARD_SCREENS } from "@/constants/dashboard";
import axios from "axios"; // Importer Axios



export default function Login() {
  const router = useRouter()
  // imformations demander pour un signup

   const [user, setUser] = React.useState({
    email:" ",
    password:" ",
}) 

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const onLogin = async (event: any) => {
  event.preventDefault();

  if (!email.trim() || !password.trim()) {
    console.error('Veuillez saisir votre email et votre mot de passe.');
    return;
  }

  try {
    const response = await axios.post("http://localhost:8000/api/login", {
      email,
      password
    }, {
      withCredentials: true // Inclure les cookies dans la requête
    });
  
    if (response.status === 200) {
      router.push("/dashboard/"+DASHBOARD_SCREENS[0])
    } else {
      console.error('Erreur lors de la connexion:', response.statusText);
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};

return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-[url(../../public/assets/img/loginBackground.png)] bg-cover bg-center">
       <Image src="/assets/img/Arda_Member_Logos_csph 1.png" alt="CSPH LOGO" height={60} width={400}/>
      <h1 className="text-center  mt-5 text-2xl"> Login</h1>
      <hr />

      <div className="group mt-6">
        <input required type="email" className="input"
        id= "email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="login-label">Email</label>
      </div>

      <div className="group mt-6">
        <input required type="password" className="input"
        id= "password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="login-label">Password</label>
      </div>

      <button className="animated-button p-2 mt-7 mb-7" onClick={onLogin}>
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
          </svg>
          <span className="text">Login Button Here</span>
          <span className="circle"></span>
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path
          d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
          </svg>
      </button>

      <label className="container items-center ">
          <input type="checkbox" id="check"/>
          <div className="checkmark items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                  <title>Checkmark</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="100" d="M416 128L192 384l-96-96"></path>
              </svg>
          </div> 
      Name</label> 
  </div>
);
}