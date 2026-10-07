'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const ProfilePage = () => {
    const { data: season } = authClient.useSession()
    const user = season?.user

    if(!user){
        redirect('/sign-in')
    }

    const [show ,setShow] = useState(false);

    const handleUpdateProfile = async (e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const newUserData  = Object.fromEntries(formData.entries()) as{image:string, name:string};
        await authClient.updateUser({
            ...newUserData
        })

    }
    const handleShowfrom = ()=>{
        setShow(!show);
    }
    return (
        <div className='card mt-10 border bg-base-200'>
            <div className='flex flex-col items-center gap-3'>
                    <Link href={"/profile"}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <Image alt="Tailwind-CSS-Avatar-component"
                                    src={user?.image || "/nafis.jpg"}
                                    width={100} height={80} />
                            </div>
                        </div>
                        </Link>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <button onSubmit={handleShowfrom} className='btn'>Edit Profile</button>
                    

                </div>
                 {  show && <form onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset rounded-box w-md p-4">
                    <label className="label">নাম</label>
                    <input name='name' type="text" className="input w-md" placeholder="নাম" required />

                    <label className="label">ImageUrl</label>
                    <input name='image' type="url" className="input w-md" placeholder="Image" />

                  

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ</button>
                </fieldset>
              
            </form>}
        </div>
    );
};

export default ProfilePage;