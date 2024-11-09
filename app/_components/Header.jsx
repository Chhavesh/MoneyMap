import React from 'react'
import Image from "next/image";
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-md'>
      <Image src={'./logo.svg'}
       alt='MoneyMap'
       width= {60}
       height={50}
      /> 
      <Button className='border rounded-md shadow py-3 px-5 bg-[#000000]  text-white '>Get started</Button>
    </div>
  )
}

export default Header
