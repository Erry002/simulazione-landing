import { Link } from "react-router-dom";
import React, { useState } from 'react';

import { FiMenu } from 'react-icons/fi';
import { IoHome } from "react-icons/io5";
import { BsPersonArmsUp } from "react-icons/bs";
import { GrVulnerability } from "react-icons/gr";
import { IoBuildSharp } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";

import rosso from "../assets/bianco_logo_1.png";

export default function Navbar() {

  const [activeLink, setActiveLink] = useState('home');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="flex w-full items-center">
      <nav className="flex bg-[#B30000] shadow-2xl top-0 h-[60px] justify-center w-full sm:px-10">
        <div className="flex items-center w-full max-w-7xl justify-between">
          <div className=" font-alata font-bold rounded-xl">
            <Link
              to="/"
              onClick={() => setActiveLink('/')}
              className="text-slate-50 rounded-lg text-base p-3 flex justify-center items-center gap-3"
            >
              <img src={rosso} alt="logo_azienda" className=" h-10" /> <h1>MondoTesi </h1> 
            </Link>
          </div>
          <div className="block sm:hidden">
            <FiMenu onClick={toggleMenu} className="text-white text-3xl cursor-pointer mr-4" />
          </div>
          <div className={`sm:flex pt-2 sm:space-x-5 ${showMenu ? ' z-50 flex flex-col justify-center items-center space-y-4 absolute top-[60px] bg-slate-100 text-black shadow-2xl rounded-lg w-[390px]' : 'hidden'}`}>
            <Link
              to="/"
              onClick={() => { setActiveLink('/'); setShowMenu(false); }}
              className={`${activeLink === '/' ? 'text-red-500 sm:text-red-200 w-full border-b-2 border-red-700' : 'text-slate-900 sm:text-slate-50 border-b-2 border-red-700 w-full'} hover:text-red-700 sm:hover:text-red-200 hover:underline underline-offset-4 sm:border-none transition-all flex justify-center items-center gap-2 pb-3`}
            > 
             <IoHome /> Home
            </Link>
            <Link
              to="/about"
              onClick={() => { setActiveLink('/about'); setShowMenu(false); }}
              className={`${activeLink === '/about' ? 'text-red-500 sm:text-red-200 w-full border-b-2 border-red-700' : 'text-slate-900 sm:text-slate-50 border-b-2 border-red-700 w-full'} hover:text-red-700 sm:hover:text-red-200 hover:underline underline-offset-4 sm:border-none transition-all flex justify-center items-center gap-2 pb-3`}
            >
              <BsPersonArmsUp />Chi&nbsp;siamo
            </Link>
            <Link
              to="/skills"
              onClick={() => { setActiveLink('/skills'); setShowMenu(false); }}
              className={`${activeLink === '/skills' ? 'text-red-500 sm:text-red-200 w-full border-b-2 border-red-700' : 'text-slate-900 sm:text-slate-50 border-b-2 border-red-700 w-full'} hover:text-red-700 sm:hover:text-red-200 hover:underline underline-offset-4 sm:border-none transition-all flex justify-center items-center gap-2 pb-3`}
            >
              <GrVulnerability /> Servizi
            </Link>
            <Link
              to="/recensioni"
              onClick={() => { setActiveLink('/project'); setShowMenu(false); }}
              className={`${activeLink === '/project' ? 'text-red-500 sm:text-red-200 w-full border-b-2 border-red-700' : 'text-slate-900 sm:text-slate-50 border-b-2 border-red-700 w-full'} hover:text-red-700 sm:hover:text-red-200 hover:underline underline-offset-4 sm:border-none transition-all flex justify-center items-center gap-2 pb-3`}
            >
              <IoBuildSharp /> Recensioni
            </Link>
            <Link
              to="/form"
              onClick={() => { setActiveLink('/form'); setShowMenu(false); }}
              className={`${activeLink === '/form' ? 'text-red-500 sm:text-red-200 w-full border-b-2 border-red-700' : 'text-slate-900 sm:text-slate-50 border-b-2 border-red-700 w-full rounded-md'} hover:text-red-700 sm:hover:text-red-200 hover:underline underline-offset-4 sm:border-none transition-all flex justify-center items-center gap-2 pb-3`}
            >
              <FaWpforms /> Contatti
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
