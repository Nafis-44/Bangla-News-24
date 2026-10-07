// import Link from 'next/link';
// interface NavItem {
//     "slug": string,
//     "title": string,
//     "topicId": string | null,
//     "url": string,
//     "scrapable": boolean
// }

// const Navlink = async () => {
//     const res = await fetch("https://news-api-v2.vercel.app/api/categories")
//     const data = await res.json()
//     const nav: NavItem[] = data.data
//     const filteredNav = nav.filter(n => n.scrapable)
//     return (
//         <div className="flex justify-center gap-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//             <Link href={"/"}>হোম</Link>
//             {
//                 filteredNav.map((n, i) => <Link key={i} href={`/category/${n.slug}`}>
//                     {n.title}</Link>)
//             }
//         </div>
//     );
// };

// export default Navlink;









import Link from 'next/link';

interface NavItem {
    "slug": string,
    "title": string,
    "topicId": string | null,
    "url": string,
    "scrapable": boolean
}

const Navlink = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const nav: NavItem[] = data.data;
    const filteredNav = nav.filter(n => n.scrapable);

    return (
        <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="flex overflow-x-auto md:flex-wrap md:justify-center items-center gap-6 py-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap max-w-7xl mx-auto scrollbar-none">
                <Link href={"/"} className="hover:text-red-700 transition-colors shrink-0">হোম</Link>
                {
                    filteredNav.map((n, i) => (
                        <Link 
                            key={i} 
                            href={`/category/${n.slug}`}
                            className="hover:text-red-700 transition-colors shrink-0"
                        >
                            {n.title}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Navlink;