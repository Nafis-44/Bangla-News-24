import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface INews {
    id: number;
    title: string;
    text: string;
    imageUrl: string;
    category: string;
    imageAlt: string;
}

const NewsCard = ({ news }: { news: INews }) => {
    return (
        <Link href={`/news/${news.id}`} className="h-full">
            <div className="card bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden flex flex-col h-full">
                {news?.imageUrl && (
                    <figure className="relative w-full h-48 overflow-hidden bg-gray-100">
                        <Image
                            src={news.imageUrl}
                            alt={news.title || "News Image"}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </figure>
                )}
                <div className="card-body p-5 flex flex-col justify-between flex-grow">
                    <div>
                        <span className="inline-block text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md mb-2">
                            {news.category}
                        </span>
                        <h2 className="card-title text-base font-bold text-gray-900 line-clamp-2 leading-snug mb-2 hover:text-red-600 cursor-pointer">
                            {news.title}
                        </h2>
                        <p className="text-sm text-gray-600 line-clamp-3">
                            {news.text}
                        </p>
                    </div>
                </div>
            </div></Link>
    );
};

export default NewsCard;