import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[60vh]' src="https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/64ad63173051066553dbfa40_3dgraphicdesign.jpg" alt="" />
        <div className='absolute -bottom-8 right-[48%]  border-white border-2 rounded-full'>
          <img className=" rounded-full  w-16 h-16" src="https://t3.ftcdn.net/jpg/09/63/77/16/360_F_963771609_r29jZJ2rKfgMQ2BrTxNkdi1pzqCGLUNU.jpg" alt="" />
        </div>
      </div>
      <div className='info flex justify-center items-center my-10 flex-col'>
        <div className="font-bold text-lg">
          @{params.username}
        </div>
        <div className='text-slate-300'>
          Creating Animated art for VTT's
        </div>
        <div className='text-slate-300'>
          9,719 members 82 posts, 450/release
        </div>
        <div className="payement flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-4  flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="" />
                <span>Alex donated <span className='font-bold'>$30</span>  with a message "I support you bro. lots of LOVE "</span>
                </li>
              <li className='my-4  flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="" />
                <span>Donald Trump donated <span className='font-bold'>$1000</span>  with a message "I support you bro. lots of LOVE "</span>
                </li>
              <li className='my-4  flex gap-2 items-center'>
                <img src="avatar.gif" width={33} alt="" />
                <span>Elon Mask donated <span className='font-bold'>$325</span>  with a message "I support you bro. lots of LOVE "</span>
                </li>


            </ul>
          </div>
          <div className="makepayement w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5'>Make a Payement</h2>
            <div className="flex gap-2 flex-col">
              <input type="text" name="" id="" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              <input type="text" name="" id="" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              <input type="text" name="" id="" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay</button>

            </div>
            <div className='flex  gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>pay $50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
