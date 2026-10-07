




// 'use client'

// import { authClient } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import React from "react";

// const SignUpPage = () => {
//     const router = useRouter();

//     const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
//         e.preventDefault();

//         const formData = new FormData(e.target);
//         const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string };
//         console.log(user);
//         const { data, error } = await authClient.signUp.email({
//             ...user,
//             callbackURL: "/"
//         });

//         if (data) {
//             console.log(data);
//             router.push("/");
//         }

//         if (error) {
//             console.log(error);
//         }

//     }
//     const handleGoogleSignIn = async () => {
//         const data = await authClient.signIn.social({
//             provider: "google",
//         });

//     }

//     const handleGithubSignIn = async () => {
//         const data = await authClient.signIn.social({
//             provider: "github"
//         })
//     }

//     return (
//         <div className="flex flex-col items-center mt-5">
//             <h2 className='text-red-700 font-bold text-2xl '>সাইন আপ</h2>
//             <form onSubmit={onSubmit}>
//                 <fieldset className="fieldset rounded-box w-md p-4">
//                     <label className="label">নাম</label>
//                     <input name='name' type="text" className="input w-md" placeholder="নাম" required />

//                     <label className="label">ImageUrl</label>
//                     <input name='image' type="url" className="input w-md" placeholder="Image" />

//                     <label className="label">ইমেইল</label>
//                     <input name='email' type="email" className="input w-md" placeholder="ইমেইল" required />

//                     <label className="label">পাসওয়ার্ড</label>
//                     <input name='password' type="password" className="input w-md" placeholder="পাসওয়ার্ড" required />

//                     <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ</button>
//                 </fieldset>
//                 <button onClick={handleGoogleSignIn} className='btn'>Sign In With Google</button>
//                 <button onClick={handleGithubSignIn} className='btn'>Sign In With GITHUB</button>
//             </form>
//         </div>
//     );
// };

// export default SignUpPage;









'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string };
        console.log(user);
        
        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/"
        });

        if (data) {
            console.log(data);
            router.push("/");
        }

        if (error) {
            console.log(error);
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github"
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8">
            <div className="w-full max-w-md bg-white border border-gray-200 shadow-md rounded-2xl p-6 sm:p-8 flex flex-col items-center">
                <h2 className='text-red-700 font-bold text-2xl mb-4'>সাইন আপ</h2>
                
                <form onSubmit={onSubmit} className="w-full">
                    <fieldset className="fieldset w-full flex flex-col gap-3">
                        <label className="label font-medium text-gray-700">নাম</label>
                        <input 
                            name='name' 
                            type="text" 
                            className="input input-bordered w-full" 
                            placeholder="আপনার নাম দিন" 
                            required 
                        />

                        <label className="label font-medium text-gray-700">ImageUrl</label>
                        <input 
                            name='image' 
                            type="url" 
                            className="input input-bordered w-full" 
                            placeholder="ছবির লিংক (ঐচ্ছিক)" 
                        />

                        <label className="label font-medium text-gray-700">ইমেইল</label>
                        <input 
                            name='email' 
                            type="email" 
                            className="input input-bordered w-full" 
                            placeholder="ইমেইল দিন" 
                            required 
                        />

                        <label className="label font-medium text-gray-700">পাসওয়ার্ড</label>
                        <input 
                            name='password' 
                            type="password" 
                            className="input input-bordered w-full" 
                            placeholder="পাসওয়ার্ড দিন" 
                            required 
                        />

                        <button type='submit' className="btn bg-red-700 hover:bg-red-800 text-white mt-4 w-full">
                            সাইন আপ
                        </button>
                    </fieldset>
                </form>

                <div className="divider my-6 w-full text-gray-400 text-sm">অথবা</div>

                <div className="flex flex-col gap-3 w-full">
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full flex items-center gap-2'>
                        Sign In With Google
                    </button>
                    <button onClick={handleGithubSignIn} className='btn btn-neutral w-full flex items-center gap-2'>
                        Sign In With GITHUB
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;