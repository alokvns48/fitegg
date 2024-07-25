import { useMediaQuery } from 'react-responsive';
import img from '../assets/navlogo.png'

function Navbar() {
  const isMaxScreenWidth650px = useMediaQuery({ query: "(max-width: 649.5px)" });
  const divClasses = `${isMaxScreenWidth650px ? "icon":"icon absolute"}`;
  const imgClasses =  `${isMaxScreenWidth650px ? "w-[4rem] scale-[130%] translate-y-[10%]":"w-24 h-24"}`;
  const linksWrapperDivClasses = `${isMaxScreenWidth650px ? "w-full flex items-center":"w-full h-20 flex items-center"}`
  return (
    <div className='flex relative  border-b-2 border-[#5d3327]'>
      <div className={divClasses}>
        <img src={img} className={imgClasses}/>
      </div>
      <div className={linksWrapperDivClasses}>
        <ul className='flex gap-8 sm:gap-16 lg:gap-32 mx-auto text-[#5d3327]  text-base sm:text-lg'>
            <li className=''>Home </li>
            <li className=''>About</li>
            <li className=''>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;