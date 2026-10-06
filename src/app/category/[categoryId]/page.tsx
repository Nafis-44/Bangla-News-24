import NewsCard from '@/components/NewsCard';
import React from 'react';
interface ICategoryPage {
   id: number;
   title: string;
   description: string;
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






// import NewsCard from '@/components/NewsCard';
// import React from 'react';

// interface INewsItem {
//     id: number;
//     title: string;
//     description: string;
//     imageUrl: string;
//     imageAlt?: string;
//     category: string;
// }

// interface ICategoryData {
//     title: string;
//     articles: INewsItem[];
// }

// const CategoryPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
//     const { categoryId } = await params;
//     const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
//     const data = await res.json();
//     const category: ICategoryData = data.data;

//     return (
//         <div className="max-w-7xl mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
//                 {category?.title}
//             </h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {category?.articles?.map((news) => (
//                     <NewsCard key={news.id} news={news} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategoryPage;