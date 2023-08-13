import React from 'react'
import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <section className="navbar bg-slate-500">
                <nav className="py-2 flex items-center justify-around">
                    <div className="text-left">
                        <img src='https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png' alt='' className='w-16 h-16 rounded-full mx-4' />
                    </div>
                    <div className=''>
                        <ul className='flex space-x-4'>
                            <li className='px-6 py-2 bg-slate-700 text-slate-50 font-semibold text-sm hover:bg-purple-500 rounded-sm'><Link href='/'>Home</Link></li>
                            <li className='px-6 py-2 bg-slate-700 text-slate-50 font-semibold text-sm hover:bg-purple-500 rounded-sm'><Link href='/about'>About</Link></li>
                            <li className='px-6 py-2 bg-slate-700 text-slate-50 font-semibold text-sm hover:bg-purple-500 rounded-sm'><Link href='/services'>Services</Link></li>
                            <li className='px-6 py-2 bg-slate-700 text-slate-50 font-semibold text-sm hover:bg-purple-500 rounded-sm'><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='space-x-2'>
                        <button className='px-6 py-2 text-sm font-medium border-2 border-purple-600 rounded-md text-white bg-orange-700 hover:bg-purple-600'><Link href='/login'>Login</Link></button>
                        <button className='px-6 py-2 text-sm font-medium border-2 border-purple-600 rounded-md text-white bg-orange-700 hover:bg-purple-600'><Link href='/signup'>Signup</Link></button>
                        <button className='px-6 py-2 text-sm font-medium border-2 border-purple-600 rounded-md text-white bg-orange-700 hover:bg-purple-600'><Link href='/profile'>Profile</Link></button>
                    </div>
                </nav>
            </section>

        </>
    )
}
