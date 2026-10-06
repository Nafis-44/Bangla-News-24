




// import MarqueeText from "react-marquee-text";
// import "react-marquee-text/dist/styles.css";
// interface Headline {
//     "id": string,
//     "title": string
    
// }

// const Marquee = async () => {
//     const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
//     const data = await res.json();
//     const headlines: Headline[] = data.data;

//     return (
//         <div className="bg-red-700 text-white py-2">
//             <div className="flex max-w-7xl mx-auto font-bold">
//                 <div className="bg-red-700 py-1 px-5">সর্বশেষ</div>
//                 <MarqueeText className="py-1" direction="right" duration={9}>
//                     {headlines.map((h, i) => (
//                         <span key={h.id || i} className="inline-flex items-center gap-2 mx-5">
//                             <span>•</span>
//                             <span>{h.title}</span>
//                         </span>
//                     ))}
//                 </MarqueeText>
//             </div>
//         </div>
//     );
// };

// export default Marquee;






import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";

interface Headline {
    id: string;
    title: string;
}

const Marquee = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news?limit=10"
    );

    const data = await res.json();
    const headlines: Headline[] = data.data;

    return (
        <div className="bg-red-700 text-white py-2">
            <div className="flex max-w-7xl mx-auto font-bold">
                
                <div className="bg-red-700 py-1 px-5">
                    সর্বশেষ
                </div>

                <MarqueeText
                    className="py-1"
                    direction="right"
                    duration={9}
                >
                    {headlines.map((h, i) => (
                        <Link
                            key={h.id || i}
                            href={`/news/${h.id}`}
                            className="inline-flex items-center gap-2 mx-5 hover:underline"
                        >
                            <span>•</span>
                            <span>{h.title}</span>
                        </Link>
                    ))}
                </MarqueeText>

            </div>
        </div>
    );
};

export default Marquee;