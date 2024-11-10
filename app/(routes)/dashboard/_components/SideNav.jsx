"use client"
import { UserButton } from '@clerk/nextjs'
import { LayoutGrid, Link, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
function SideNav() {
    const menuList = [
      {
        id: 1,
        name: "Dashboard",
        icon: LayoutGrid,
        path: "/dashboard"
      },
      {
        id: 2,
        name: "Budgets",
        icon: PiggyBank,
        path: "/dashboard/bugdets"
      },
      {
        id: 3,
        name: "Expenses",
        icon: ReceiptText,
        path: "/dashboard/expenses"
      },
      {
        id: 4,
        name: "Upgrade",
        icon: ShieldCheck,
        path: "/dashboard/upgrade"
      },
    ];
    const path=usePathname();

    useEffect(()=> {
        console.log(path)
    },[path])
  return (
    <div className="h-screen p-3 border shadow-sm bg-gray-900">
      <Image src={"/logo.svg"} alt="MoneyMap" width={80} height={100} />
      <div className="mt-5">
        {menuList.map((menu, index) => (
          // <Link href={menu.path}>
            <h2
              className={`flex gap-2 items-center text-white 
                font-medium p-5 cursor-pointer rounded-md  mb-2
             hover:text-primary hover:bg-blue-400
             ${path==menu.path&&'text-primary bg-blue-600'}
             `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          // </Link>
        ))}
      </div>
      <div
        className="fixed bottom-10 p-5 flex gap-2
      items-center text-blue-300"
      >
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav
