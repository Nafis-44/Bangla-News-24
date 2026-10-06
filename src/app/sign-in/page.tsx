import React from 'react';


const SignInPage = () => {
    return (
        <div className="flex flex-col items-center mt-5">
            <h2 className='text-red-700 font-bold text-2xl '>সাইন ইন</h2>
            <form>
                <fieldset className="fieldset   rounded-box w-md  p-4">

                    <label className="label">ইমেইল</label>
                    <input name='email' type="email" className="input w-md" placeholder="ইমেইল" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name='passward' type="password" className="input w-md" placeholder="পাসওয়ার্ড" />

                    <button className="btn bg-red-700 text-white mt-4">সাইন ইন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;