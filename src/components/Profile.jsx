import React, {useContext} from 'react'
import profile from "../assets/images/image-jeremy.png";
import { ContextProvider } from '../App';


const Profile = () => {

  const schContext = useContext(ContextProvider);

  const items = ["daily", "weekly", "monthly"]

  return (
    <section className='flex flex-col mb-30 shadow-2xl'>
      <div className='p-4 rounded-md flex flex-col gap-6 bg-blue-400 text-[white] h-[70%]'>
        <img src={profile} alt="" className='border-4 border-[white] w-[100px] h-[100px] rounded-full block' />
        <p className='text-sm font-extralight'>Report for <span className='text-3xl capitalize block'>Jeremy Wilson</span></p>
      </div>
      <div className='rounded-md flex gap-3 md:flex-col justify-between p-4 bg-blue-900'>
        {
          items.map((item, index)=>{
            return <button key={index} onClick={ 
              () => schContext.schDispatch(item) } className="capitalize block cursor-pointer text-left text-sm text-blue-100 focus:text-[white] active:font-extrabold ">{item}</button>
          })
        }
      </div>
    </section>
  )
}

export default Profile