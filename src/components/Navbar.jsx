import { useState } from 'react'
import { close,  menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <nav className='w-full flex py-6
    justify-between items-center navbar'>
 
        <span  className='text-cyan-400 w-[180px] h-[32px] font-poppins font-semibold text-[17px]'> Remain India Pvt Ltd</span>

      <ul className='list-none sm:flex 
     hidden justify-end items-center'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className
            ={`font-poppins font-normal
             cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
              text-white `}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>

        ))}

      </ul>

      <div className='sm:hidden flex
      flex-1 justify-end items-center' >
        <img src={toggle ? menu : close}
          alt='menu'
          className='w-[28px] h-[28px] 
        object-contain'
          onClick={() => setToggle(!toggle)} />

        <div className={`${!toggle ?
          'flex' : 'hidden'} p-6 bg-black-gradient absolute
         top-20 right-0 mx-4 my-2 min-w-[140px]
          rounded-xl sidebar`}>

          <ul className='list-none flex flex-col
            justify-end items-center mx-3'>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className
                ={`font-poppins font-normal
             cursor-pointer text-[16px]
            ${index === navLinks.length - 1 ?'mb-0' :'mb-4'}
              text-white `}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

              </li>

            ))}
          </ul>

        </div>


      </div>

    </nav>
  )
}

export default Navbar
