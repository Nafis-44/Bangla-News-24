// import Image from 'next/image';
// import Link from 'next/link';
// import Navlink from './Navlink';
// import UserInfo from './UserInfo';

// const header = () => {
//     const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

//     return (
//         <header className="w-full bg-white shadow-sm">
//             <div className="mx-auto max-w-7xl flex flex-col items-center p-4 relative">
//                 {/* Right Side Buttons */}
//                 <UserInfo/>

//                 {/* Logo, Title and Date Section in Center */}
//                 <div className="flex items-center gap-3">
//                     <Image
//                         className="w-10 h-10"
//                         src="/logo.webp"
//                         alt="Logo"
//                         width={50}
//                         height={50}
//                     />
//                     <div>
//                         <h1 className="text-2xl font-bold text-red-800 dark:text-white">
//                             Bangla News 24
//                         </h1>
//                         <p className="text-sm text-gray-600">{date}</p>
//                     </div>
//                 </div>
//             </div>
//             <Navlink/>
//         </header>
//     );
// };

// export default header;









import Image from 'next/image';

import Navlink from './Navlink';
import UserInfo from './UserInfo';

const header = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between p-4 relative gap-4">
                {/* Logo, Title and Date Section in Center/Left */}
                <div className="flex items-center gap-3 text-center md:text-left">
                    <Image
                        className="w-10 h-10 object-contain"
                        src="/logo.webp"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-red-800 dark:text-white">
                            Bangla News 24
                        </h1>
                        <p className="text-xs md:text-sm text-gray-600">{date}</p>
                    </div>
                </div>

                {/* Right Side Buttons */}
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <UserInfo />
                </div>
            </div>
            <Navlink />
        </header>
    );
};

export default header;