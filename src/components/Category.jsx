import React, {useContext} from 'react'
import threedots from "/images/icon-ellipsis.svg";
import { ContextProvider } from '../App';

const Category = (props) => {
  const [icon, color] = props.others;
  const schContext = useContext(ContextProvider);

  let timeframes = ""
  let comment = ""
  if(schContext.schState == "daily"){
    comment = "yesterday"
    timeframes = props.timeframes.daily
  }
  else if(schContext.schState == "weekly"){
    comment = "last week"
    timeframes = props.timeframes.weekly;
  }else{
    comment = "last month"
    timeframes = props.timeframes.monthly;
  }

  return (
    <div className='relative'>
      
      <div className={`p-5 bg-blue-500 text-[white] shadow-2xl w-full h-40 z-20 relative rounded-md grid grid-cols-2`}>

        <h3>{props.title}</h3>
        <img src={threedots} alt="" className='justify-self-end cursor-pointer' />
        <div className='text-xs'>
          <h3 className="text-4xl">{timeframes.current}</h3>
          <span className='text-blue-100 inline-flex text-[14px]'>
            <span >{comment}</span>-<span>{timeframes.previous}</span>
          </span>
        </div>
      </div>
      <div className={`w-full h-40 z-10 -translate-y-4 rounded-md absolute top-0 flex justify-end ${props.others[1]}`} >
        <img src={icon} className='w-10 h-10 ' alt="" />
      </div>
    </div>
  )
}

export default Category