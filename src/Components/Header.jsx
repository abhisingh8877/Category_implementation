import Card from './Card';
import react from 'react'
import ValueContext from '../Context/CreateValueContext'
import {useState} from 'react'
function Header() {
  const[value,setValue]=useState("Category");
    console.log(value)
  return (
    <div>
    <div className='h-[40px] bg-neutral-400  flex justify-end items-center sticky'>
    <nav className='mr-4'>
        <ul className='flex justify-end gap-6'>
            <li className='font-semibold '>
                
                    <select id='catogery' className="block appearance-none  bg-inherit border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight outline-none focus:outline-none focus:shadow-outline custom-select cursor-pointer" value={value} onChange={(e)=>setValue(e.target.value)}>
                    <option value="Category">Category</option>
                    <option value="men"  className='cursor-pointer'>Men</option>
                    <option value="women" className='cursor-pointer'>Women</option>
                    </select>
                
            </li>
            <li className='font-semibold mt-2'>Cart</li>
        </ul>
    </nav>
    </div>
    <ValueContext.Provider value={value}>
    <Card/>
    </ValueContext.Provider>
    </div>
  )
}

export default Header
