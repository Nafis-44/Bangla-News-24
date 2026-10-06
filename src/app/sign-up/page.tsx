// 'use client'

// import { authClient } from "@/lib/auth-client";
// import { redirect } from "next/navigation";

// const SignUpPage = () => {

//     const onSubmit = async (e) => {
//         e.prevenDefault()

//         const formData = new FormData(e.target)
//         const user = Object.fromEntries(formData.entries())
//         const { data, error } = await authClient.signUp.email({
//             ...user,
//             callbackURL: "/"
//         })
//         if (data) {
//             console.log(data)
//             redirect("/")

//         }
//         if (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className="flex flex-col items-center mt-5">
//             <h2 className='text-red-700 font-bold text-2xl '>সাইন আপ</h2>
//             <form onSubmit={onSubmit}>
//                 <fieldset className="fieldset   rounded-box w-md  p-4">


//                     <label className="label">নাম</label>
//                     <input name='name' type="text" className="input w-md" placeholder="নাম" />

//                     <label className="label">ImageUrl</label>
//                     <input name='image' type="url" className="input w-md" placeholder="Image" />



//                     <label className="label">ইমেইল</label>
//                     <input name='email' type="email" className="input w-md" placeholder="ইমেইল" />

//                     <label className="label">পাসওয়ার্ড</label>
//                     <input name='passward' type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

//                     <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ</button>
//                 </fieldset>
//             </form>
//         </div>
//     );
// };

// export default SignUpPage;








'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        
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
    }

    return (
        <div className="flex flex-col items-center mt-5">
            <h2 className='text-red-700 font-bold text-2xl '>সাইন আপ</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md p-4">
                    <label className="label">নাম</label>
                    <input name='name' type="text" className="input w-md" placeholder="নাম" required />

                    <label className="label">ImageUrl</label>
                    <input name='image' type="url" className="input w-md" placeholder="Image" />

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input w-md" placeholder="ইমেইল" required />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input w-md" placeholder="পাসওয়ার্ড" required />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;