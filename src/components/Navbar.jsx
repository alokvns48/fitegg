import img from '../assets/navlogo.png'

function Navbar() {
  return (
    <div className='flex relative  border-b-2 border-[#5d3327]'>
      <div className="icon absolute ">
        <img src={img} className='w-24 h-24'/>
      </div>
      <div className="w-full h-20 flex items-center">
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