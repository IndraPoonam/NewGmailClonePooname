import React from 'react'

function TailwindPrac() {
  return (
    <>
    <div class="absolute left-0 right-0 top-0 bottom-0 m-auto w-3/4 h-3/4 bg-gray-300">
   <div className='flex justify-between bg-gray-200'>
     <div className=' h-[50px]  '>  
     <ul className='flex gap-10'>
<li><i class="fa-solid fa-arrow-left"></i></li>
<li><i class="fa-solid fa-inbox"></i></li>
<li><i class="fa-solid fa-circle-exclamation"></i></li>
<li><i class="fa-solid fa-trash-can"></i></li>
<li><i class="fa-regular fa-envelope"></i></li>
<li><i class="fa-regular fa-clock"></i></li>
<li><i class="fa-regular fa-circle-check"></i></li>
<li><i class="fa-solid fa-right-from-bracket"></i></li> 
<li><i class="fa-solid fa-tag"></i></li>
<li><i class="fa-solid fa-ellipsis-vertical"></i></li>  </ul></div> 

<div className=' h-[50px] '>
    <ul className='flex gap-10 items-center justify-end'>
<li>4 of 4,742</li>
<li><i class="fa-solid fa-chevron-left"></i></li>
<li><i class="fa-solid fa-chevron-right"></i></li>
    </ul></div>
    </div>
<div className='flex justify-between'>
  <div className='flex gap-4 ml-10 '>
    <h1 className='text-3xl'>Security alert</h1>
    <h2 className='bg-gray-400 mt-2 h-6'>Inbox X</h2>
  </div>
  <div className='justify-end '>
    <ul className='flex justify-end gap-10'>
      <li><i class="fa-solid fa-print"></i></li>
      <ul><i class="fa-solid fa-arrow-up-right-from-square"></i></ul>
    </ul>
  </div>
</div>

<div className='flex justify-between mt-2'>
  <div className='flex gap-5 px-1'><ul className='flex gap-10'>
    <li className='text-5xl text-blue-400'><i class="fa-solid fa-circle-user "></i></li>
   <div><span className='font-bold '>Google </span>
    no-reply@google.accounts.com</div> 
    </ul></div>
<div></div>
</div>










    </div>  
    </>
  )
}

export default TailwindPrac