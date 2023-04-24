
import React from 'react'
import styles from '../style'
import {battery } from '../assets'



const Hero = () => (

    <section id="home" className={`flex md:flex-row
     flex-col ${styles.paddingY}`}>

{/* left screen */}

        <div className={`flex-1 ${styles.flexStart} 
        flex-col xl:px-0 sm:px-16 px-6`}>
             <div className='flex flex-row items-center 
             py-[6px] px-4 bg-discount-gradient
              rounded-[10px] mb-2'>
                <p className={`${styles
                .paragraph} ml-2`}>
                India's <span className='text-white'>No 1 </span>Trusted
                <span className='text-white'> E-waste</span> Recyclers
                </p>
                
             </div>

             <div className='flex flex-row justify-between 
             items-center w-full'>
             <h1 className="flex-1 font-poppins font-semibold
              ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
             </div>
             <h1 className="font-poppins font-semibold
              ss:text-[68px] text-[52px]
              text-white ss:leading-[100.8px] leading-[75px] w-full">
          Recycling Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        E-waste recycling is the reuse and reprocessing of
         electrical and electronic equipment of any type
          that has been discarded or regarded as obsolete.
        </p>

        </div>  

{/* right screen */}

        <div>
            <img src={battery} alt="Li-battery" className="w-[100%] h-[100%] relative z-[5]" />
        </div> 
            <div className='absolute z-[0] w-[40%] h-[35%] top-0 '/>
            <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
            <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
          
    </section>

)
export default Hero