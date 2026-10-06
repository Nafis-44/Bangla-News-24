import Image from 'next/image';
import Link from 'next/link';
import Navlink from './Navlink';

const header = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="mx-auto max-w-7xl flex flex-col items-center p-4 relative">
                {/* Right Side Buttons */}
                <div className="absolute right-4 top-4 flex items-center gap-2">
                    <Link href="/signin" className="btn btn-sm">সাইন ইন</Link>
                    <Link href="/signup" className="btn btn-sm btn-warning">সাইন আপ</Link>
                </div>

                {/* Logo, Title and Date Section in Center */}
                <div className="flex items-center gap-3">
                    <Image
                        className="w-10 h-10"
                        src="/logo.webp"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-red-800 dark:text-white">
                            Bangla News 24
                        </h1>
                        <p className="text-sm text-gray-600">{date}</p>
                    </div>
                </div>
            </div>
            <Navlink/>
        </header>
    );
};

export default header;