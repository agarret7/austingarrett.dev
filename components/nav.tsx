'use client'

import React from "react";  
import Link from "next/link"  
import { usePathname } from 'next/navigation';


const ActiveLink = ({path, children} : {path: string, children: string}) => {
  return <Link href={path} className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"}>
    {children}
  </Link>
}

const PassiveLink = ({path, children} : {path: string, children: string}) => {
  return <Link href={path} className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>
    {children}
  </Link>
}

const NavLink = ({path, children, active} : {path: string, children: string, active: boolean}) => {
  return active ?
    <ActiveLink path={path}>{children}</ActiveLink>
    :
    <PassiveLink path={path}>{children}</PassiveLink>
}

const Nav = ({ navLinks } : {navLinks: Array<{href: string, name: string}>}) => {
  const pathname = usePathname(); 
  return (
    <nav className="sticky z-[100] left-0 top-0 w-full bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center m-4 text-sm opacity-50 whitespace-nowrap dark:text-white hover:bg-gray-100 md:hover:bg-transparent">AUSTIN GARRETT</span>
        </a>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button> */}
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col m-4 text-sm opacity-75 p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  {isActive ?
                    <Link href={link.href} className={"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"}>
                      {link.name}
                    </Link>
                    :
                    <Link href={link.href} className={"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"}>
                      {link.name}
                    </Link>
                  }
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Nav;
