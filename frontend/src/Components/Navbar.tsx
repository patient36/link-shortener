"use client";

import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
    const [activeId, setActiveId] = useState(1);

    const navItems = [
        { id: 1, navlink: "Home", icon: <FaHome />, href: "/" },
        { id: 2, navlink: "Services", icon: <FaGear />, href: "/services" },
        { id: 3, navlink: "User Guide", icon: <FaBookOpenReader />, href: "/user-guide" },
    ];

    const setActive = (itemId: number) => setActiveId(itemId);

    return (
        <div className="w-screen absolute top-0 z-10 flex flex-row bg-gray-100 rounded-t-md shadow-md">
            {navItems.map((item) => (
                <Link key={item.id} href={item.href}
                    onClick={() => setActive(item.id)}
                    className={`w-1/3 py-3 h-full flex items-start justify-center gap-2 first:rounded-tl-md last:rounded-tr-md font-bold text-lg cursor-pointer transition-all ${item.id === activeId
                        ? "bg-blue-100 text-blue-600 border-b-4 hover:border-blue-600 border-blue-600"
                        : "text-gray-700"
                        } hover:bg-blue-100 hover:text-blue-500 hover:border-b-4 hover:border-green-400`}
                >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="max-sm:hidden">{item.navlink}</span>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
