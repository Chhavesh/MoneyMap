"use client"
import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';
import {useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';


function Header() {

  const {user, isSignedIn} = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src={"./logo.svg"} alt="MoneyMap" width={60} height={50} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={'/sign-in'}>
          <Button className="border rounded-md shadow py-3 px-5 bg-[#000000]  text-white ">
            Get started
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Header
