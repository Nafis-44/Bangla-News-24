import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface News {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const MainNews = ({ news }: { news: News[] }) => {
    const firstNews = news[0];
    const otherNews = news.slice(1);
    return (
        <div className='flex gap-2'>
            <Link href={`/news/${firstNews.id}`} className="h-full">
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <Image
                            src={firstNews.imageUrl}
                            alt={firstNews.imageUrl}
                            width={500}
                            height={300} />
                    </figure>
                    <div className="card-body">
                        <p className='text-red-500 font-semibold'>{firstNews.category}</p>
                        <h2 className="card-title">{firstNews.title}</h2>
                        <p>{firstNews.description}</p>

                    </div>
                </div></Link>

            <div className='grid gap-2'>

                {otherNews.slice(0, 4).map(on => <div className='card bg-base-100 border border-gray-300 p-5' key={on.id}>
                    <p className='text-red-500 font-semibold'>{firstNews.category}</p>
                    <div>{on.title}</div>
                </div>)}
            </div>


        </div>
    );
};

export default MainNews;