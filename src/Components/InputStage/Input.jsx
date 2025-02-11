import React, { useContext, useState } from 'react'
import { FaDownload } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Store } from '../../Store/ContextProvider';

function Input() {
  const [input, setInput] = useState()
  const {addTodo} = useContext(Store)

  const add = (e) =>{
    e.preventDefault()
    if(!input) return
    addTodo(input)
    setInput("")
  }

  return (
<div className="flex flex-col gap-2 w-1/1 sm:w-1/2 md:w-120 text-[10px] sm:text-xs z-50 m-5">
  <form onSubmit={add}
    className="error-alert cursor-default flex items-center justify-center w-full h-12 sm:h-14 rounded-lg bg-[#A4A4A4] px-[10px]"
  >
    <div className='flex items-center gap-2'>
      <div className="text-[#fa001d] bg-white/5 backdrop-blur-xl p-1 rounded-lg cursor-pointer">
       <FaSearch />
      </div>
       <input type="text" name="" id="" className='w-65 sm:w-100 outline-none text-black text-base font-medium' value={input} onChange={(e)=> setInput(e.target.value)}/>
    </div>
    <div>
    <button
      className="text-[#64fa00] hover:bg-white/10 p-2 rounded-md transition-colors ease-linear cursor-pointer" type='submit'
    >
     <FaDownload/>
    </button>
    </div>
  </form>
</div>

  )
}

export default Input