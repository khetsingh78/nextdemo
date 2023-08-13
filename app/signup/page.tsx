"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function page() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });


    // useEffect(() => {
    //     console.log(user);

    // }, [user]);


    const addUser = async () => {
        try {
            const result = await axios.post("/api/usersignup", user);
            console.log({
                message: "success",
                data: result
            })

        } catch (error) {
            console.log('errror' + error);
        }

    }

    return (
        <>
            <section>
                <div className='max-w-screen-sm mx-auto my-8 py-16 px-20 shadow-md rounded-lg bg-slate-400 '>
                    <h1 className='text-center text-white font-semibold text-4xl my-2'>Sign Up</h1>
                    <div className='space-y-4'>

                        <div className='flex flex-col'>
                            <label className='text-sm text-black'>Enter Name</label>
                            <input type='text' placeholder='User Name' onChange={(e) => setUser({ ...user, username: e.target.value })} className='px-4 py-2 rounded-sm font-normal text-slate-300 focus:outline-none focus:border-b-2 focus:border-purple-700' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-black'>Enter Email</label>
                            <input type='email' onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder='User Email' className='px-4 py-2 rounded-sm font-normal text-slate-300 focus:outline-none focus:border-b-2 focus:border-purple-700' />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-black'>Enter Password</label>
                            <input type='password' onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder='User Password' className='px-4 py-2 rounded-sm font-normal text-slate-300 focus:outline-none focus:border-b-2 focus:border-purple-700' />
                        </div>
                        <div>
                            <button onClick={addUser} className='px-4 py-2 w-full text-white font-normal text-sm bg-purple-600 hover:bg-yellow-700 rounded-md '>Sign Up</button>
                        </div>

                    </div>
                    <div className='mt-8 text-center'>
                        <p className=" text-slate-300 font-medium">Already have an account? <span className="text-black font-semibold"><Link href='/login'>Login</Link> </span> </p>
                    </div>

                </div>
            </section>
        </>
    )
}
