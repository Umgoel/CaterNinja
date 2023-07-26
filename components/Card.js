import React from "react";

const Card = ({ img }) => {
  return(
  <div className="w-[100%] bg-[#fab1a0] shadow-xl">
    <img className='h-[250px] w-[100%] object-cover' src="{img}" alt="newsIcon" />
    <div className='flex flex-col gap-4 p-[20px]'>
    <div> <h2>hiii
        </h2>hi</div>
    </div>
  </div>
  )
}

export default Card;
