import React from 'react';

const DetailsPage = async({params}: {params: {newsId: string}}) => {
    const {newsId} = await params;
    console.log(newsId);
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const newsData = await res.json();
    console.log(newsData);
    const news = newsData.data;
    return (
        <div>
            <h1 className="text-2xl font-bold">{news.title}</h1>
            <p>{news.title}</p>
            <p>{news.text}</p>
        </div>
    );
};

export default DetailsPage;








// import React from "react";

// const DetailsPage = async ({
//     params,
// }: {
//     params: { newsId: string };
// }) => {
//     const { newsId } = await params;

//     const res = await fetch(
//         `https://news-api-v2.vercel.app/api/article/${newsId}`
//     );

//     const newsData = await res.json();

//     console.log("News Data:", newsData);

//     const news = newsData.data;

//     if (!news) {
//         return <div>News not found</div>;
//     }

//     return (
//         <div>
//             <h1 className="text-2xl font-bold">{news.title}</h1>
//             <p>{news.title}</p>
//             <p>{news.text}</p>
//         </div>
//     );
// };

// export default DetailsPage;