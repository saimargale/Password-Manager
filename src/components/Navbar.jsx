import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#0e0e2b] text-[#E0E0E0]'>
      <div className="mycontainer flex justify-between px-4 py-5 h-14 items-center">
        <div className="logo text-white text-lg font-bold">
        <span className='text-[#9A6AFF]'>&lt;</span>
          Pass
          <span className='text-[#9A6AFF]'>Guard /&gt;</span>
        </div>
        <button className='text-white bg-[#9A6AFF] my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
      </div>
    </nav>
  )
}

export default Navbar
