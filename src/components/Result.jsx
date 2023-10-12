import React, { useState } from 'react';
import {FaCopy} from "react-icons/fa";

const Result = () => {
    const[shortenLink, SetShortenLink] = useState(`here's your result`);

  return (
    <div className='flex justify-center mx-auto my-5 text-center gap-'>
        <p className='text-blue-500 border p-2'>{shortenLink}</p>
        <button className='rounded-none'><FaCopy/></button>
    </div>

  )
}

export default Result