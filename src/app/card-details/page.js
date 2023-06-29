"use client"

import './index.css'
import { useState } from 'react'
import Image from 'next/image'
import cardLogo from '../../../public/card/card-logo.svg'
import cardIco from '../../../public/card/favicon-32x32.png'
import { Form } from '@/components/Card details'
import { Space_Grotesk } from "next/font/google";

const spaceGrostesk = Space_Grotesk({
    subsets: ['latin'],
    weight : ['300' ,'500']
})

const CardDetails = () => {

  const [cardDetails , setCardDetails] = useState({})

  return (
    <div className={`flex flex-col md:flex-row h-screen w-screen ${spaceGrostesk.className}`}>
      <div className='background-colored w-full lg:w-1/3 relative'>
      {/* ---caard front--- */}
        <div className='card card-front mt-[10%] ml-[20%] flex flex-col justify-between p-6'>
           <div>
             <Image src={cardLogo} alt='cardLogo' />
             {/* <Image src={cardIco} alt='cardIco' /> */}
           </div>
           <div >
             <h1 className='font-bold text-sm md:text-xl tracking-widest'>
             {`${cardDetails?.cardNumber ? cardDetails?.cardNumber : ' XXXX XXXX XXXX XXXX'}`}
             </h1>
             <div className='flex items-center justify-between mt-3'>
              <p className='uppercase'>
              {`${cardDetails?.cardHolderName ? cardDetails?.cardHolderName : 'Card Holder Name'}`}
              </p>
              <p>{`${cardDetails?.month ? cardDetails?.month : 'MM'} / ${cardDetails?.year ? cardDetails?.year : 'YY'} `}</p>
             </div>
           </div>
        </div> 

      {/* ---caard back--- */}
        <div className='card card-back mt-[7%] ml-[35%]'>
           <div className='cvv'>{`${cardDetails?.cvv ? cardDetails?.cvv : 'XXX'}`}</div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-1 p-4  md:mt-0'>
        <Form setCardDetails={setCardDetails} cardDetails={cardDetails} />
      </div>
    </div>
  )
}

export default CardDetails