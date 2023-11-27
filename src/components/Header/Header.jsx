import React from 'react'
import { NavLink,Outlet } from "react-router-dom";
const Header = () => {
  return (
    <div className="dark:bg-slate-700 py-3 shadow-md shadow-slate-700">
      <ul className="flex justify-center gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>`border px-4 py-1 rounded-sm ${isActive?"bg-slate-800":""}`
            }
          >
            Books
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/add-book"
            className={({ isActive }) =>`border px-4 py-1 rounded-sm ${isActive?"bg-slate-800":""}`
        }
          >
            Add Book
          </NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default Header