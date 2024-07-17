import react,{useContext, useEffect, useState} from 'react'
import all_product from '../assets/all_product'
import ValueContext from '../Context/CreateValueContext';
function Card()
{
    const[state,SetState]=useState(all_product);
    const value=useContext(ValueContext);
    function HandleValue(){
        if(value!="Category")
          {
            const newValue=all_product.filter((val)=>val.category==value)
            SetState(newValue);
          }
        else
        SetState(all_product)
    }
    console.log(value)
    useEffect(()=>{
        HandleValue()
    },[value]);
    
     function NameSorter(word,len)
     {
        if(word.length<=len)
            return word;
        else
        return word.substring(0,len)+"..."
     }
     
    return(
        <div className='flex justify-center'>
        <div className="grid grid-cols-4 gap-10">
                {
                    state.map((val)=>{
                        return(
                            <div className="flex justify-center flex-col shadow-lg hover:scale-105 hover:duration-200" key={val.id}>
                                <p className='font-semibold my-2'>
                                    {NameSorter(val.name,40)}
                                </p>
                                <div><img src={val.image} alt='' className='w-[20vw]'/></div>
                                <p className='translate-x-1/4'>Category-{val.category}</p>
                                <div className='flex justify-between mx-3 '>
                                    <p>Old-Price-{val.old_price}</p>
                                    <p> New Price-{val.new_price}</p>
                                </div>
                                <div className='flex justify-center my-2 '>
                                <button className='py-3 px-10 bg-green-400 rounded-lg'
                                >Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                    
                }
       
        </div>
        </div>
    )
}
export default Card;