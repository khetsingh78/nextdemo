import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <section>
                <div className='max-w-screen-sm mx-auto my-8 py-16 px-20 shadow-md rounded-lg bg-slate-400 '>
                    <h1 className='text-center text-white font-semibold text-4xl my-2'>Login</h1>
                    <div className=' space-y-4'>
                      
                        <div className='flex flex-col'>
                            <label className='text-sm text-black'>Enter Email</label>
                            <input type='email' placeholder='User Email' className='px-4 py-2 rounded-sm font-normal text-slate-300 focus:outline-none focus:border-b-2 focus:border-purple-700' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-black'>Enter Password</label>
                            <input type='password' placeholder='User Password' className='px-4 py-2 rounded-sm font-normal text-slate-300 focus:outline-none focus:border-b-2 focus:border-purple-700' />
                        </div>

                        <div className='flex justify-between items-center'>
                            <label className='text-black font-normal flex items-center'>
                                <input type='checkbox' className="form-checkbox inline h-5 w-5 mr-2" />Remember Me
                            </label>
                            <p className='text-black font-normal underline'><Link href=''>Forget Password</Link> </p>
                        </div>
                      
                        <div>
                            <button className='px-4 py-2 w-full text-white font-normal text-sm bg-purple-600 hover:bg-yellow-700 rounded-md '>Login</button>
                        </div>
                    </div>
                    <div className='mt-8 text-center'>
                        <p className=" text-slate-300 font-medium">Don't have an account? <span className="text-black font-semibold"><Link href='/signup'>sign Up </Link> </span> </p>
                    </div>

                </div>
            </section>
        </>
    )
}
