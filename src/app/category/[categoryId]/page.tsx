import NewsCard from '@/components/NewsCard';
import { notFound } from 'next/navigation';
import React from 'react';
interface ICategoryPage {
   id: number;
   title: string;
   description: string;
   text?:string;
   imageUrl: string;
   imageAlt?: string;
   category: string;
}


const CategoryPage = async ({params}: {params: {categoryId: string}}) => {
    const {categoryId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const category: ICategoryPage[] = data.data;
    console.log(category);
   
    return (
        <div>
           <h1 className='text-2xl font-bold border-b-2  border-red-700 mb-5'>{data.title}</h1>
           <div className='grid grid-cols-3 gap-10'>
            {
                category.map(news => <NewsCard key={news.id} news={news} />)
            }
           </div>
        </div>

                
        
    );
};

export default CategoryPage;





