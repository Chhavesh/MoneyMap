import React from 'react'
import Image from "next/image";
// import { Button } from '@/components/ui/button.jsx';

function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-md'>
      <Image src={'./logo.svg'}
       alt='MoneyMap'
       width= {60}
       height={50}
      /> 
      {/* <Button>Get Started</Button> */}
    </div>
  )
}

export default Header
