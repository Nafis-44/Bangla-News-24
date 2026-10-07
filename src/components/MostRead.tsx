// import React from 'react';
// interface IMostRead {
//   id: number;
//   title: string;
// }

// const MostRead = async() => {
//     const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
//     const data = await res.json();
//     const mostRead: IMostRead[] = data.data;
//     console.log(mostRead);
//     return (
//         <div className="card p-2 bg-base-200 border-gray-300 border">
//             <h2 className="font-bold text-red-500">সর্বাধিক পঠিত</h2>
//             <div className="grid gap-2 mt-2">
//                 {
//                     mostRead.map((n, i) => <div className="flex gap-2" key={n.id}>
//                         <p className='font-bold text-2xl text-red-400'>{i + 1}.</p>
//                         <h2>{n.title}</h2>
//                     </div>)
//                 }
//             </div>
            
//         </div>
//     );
// };

// export default MostRead;










import React from 'react';

interface IMostRead {
  id: number;
  title: string;
}

const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const mostRead: IMostRead[] = data.data;

    return (
        <div className="card p-3 md:p-4 bg-base-200 border-gray-300 border w-full shadow-sm">
            <h2 className="font-bold text-lg md:text-xl text-red-600 border-b pb-2 border-gray-300">
                সর্বাধিক পঠিত
            </h2>
            <div className="grid gap-3 mt-3">
                {
                    mostRead.map((n, i) => (
                        <div className="flex items-start gap-3 group cursor-pointer" key={n.id}>
                            <span className='font-bold text-xl md:text-2xl text-red-400 shrink-0 w-6 text-right'>
                                {i + 1}.
                            </span>
                            <h2 className="text-sm md:text-base font-medium text-gray-800 group-hover:text-red-700 transition-colors">
                                {n.title}
                            </h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MostRead;