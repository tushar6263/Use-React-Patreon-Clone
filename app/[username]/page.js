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
      </div>
    </>
  )
}

export default Username
