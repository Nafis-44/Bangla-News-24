// 'use client'
// import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const UserInfo = () => {
//     const { data: season } = authClient.useSession()
//     const user = season?.user



//     const handleSignOut = async () => {
//         await authClient.signOut();
//     }
//     return (
//         <div className="absolute right-4 top-4 flex items-center gap-2">
//             {
//                 user ? <div className='flex flex-col items-center gap-3'>
//                     <Link href={"/profile"}>
//                         <div className="avatar">
//                             <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
//                                 <Image alt="Tailwind-CSS-Avatar-component"
//                                     src={user?.image || "/nafis.jpg"}
//                                     width={100} height={80} />
//                             </div>
//                         </div>
//                         </Link>
//                     <h2>{user?.name}</h2>
//                     <button onClick={handleSignOut} className='btn btn-error btn-xs'>SignOut</button>

//                 </div> : <div >
//                     <Link href="/sign-in" className="btn btn-sm">সাইন ইন</Link>
//                     <Link href="/sign-up" className="btn btn-sm btn-warning">সাইন আপ</Link>
//                 </div>
//             }

//         </div>
//     );
// };

// export default UserInfo;









'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfo = () => {
    const { data: season } = authClient.useSession();
    const user = season?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="flex items-center gap-3">
            {
                user ? (
                    <div className='flex items-center gap-3'>
                        <Link href={"/profile"} className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-9 h-9 rounded-full ring-2 ring-offset-2 relative">
                                    <Image 
                                        alt="User Avatar"
                                        src={user?.image || "/nafis.jpg"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <span className="hidden sm:inline font-medium text-sm text-gray-700">{user?.name}</span>
                        </Link>
                        <button 
                            onClick={handleSignOut} 
                            className='btn btn-error btn-xs sm:btn-sm text-white'
                        >
                            SignOut
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link href="/sign-in" className="btn btn-sm btn-outline">সাইন ইন</Link>
                        <Link href="/sign-up" className="btn btn-sm btn-warning">সাইন আপ</Link>
                    </div>
                )
            }
        </div>
    );
};

export default UserInfo;