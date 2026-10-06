import React from 'react';
interface IMostRead {
  id: number;
  title: string;
}

const MostRead = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const mostRead: IMostRead[] = data.data;
    console.log(mostRead);
    return (
        <div className="card p-2 bg-base-200 border-gray-300 border">
            <h2 className="font-bold text-red-500">সর্বাধিক পঠিত</h2>
            <div className="grid gap-2 mt-2">
                {
                    mostRead.map((n, i) => <div className="flex gap-2" key={n.id}>
                        <p className='font-bold text-2xl text-red-400'>{i + 1}.</p>
                        <h2>{n.title}</h2>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default MostRead;