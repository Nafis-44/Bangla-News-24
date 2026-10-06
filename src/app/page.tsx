import MainNews from "@/components/MainNews";

import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";
interface IotherSection {
  curationId: string;
  title: string;
  articles: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  }[];
}


export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IotherSection[] = sections.slice(1);
  console.log(otherSections);

  return (
    <div>
     
      <div className="grid gap-5 mt-5 grid-cols-3 ">
        {/* news section */}
        <div className=" col-span-2 ">
          <MainNews news={mainNews} />
          <div className="grid  gap-5 mt-5 ">
            {
              otherSections.map(os => <div className="" key={os.curationId}>
                <h2 className="font-bold border-b-2 border-red-300 pb-1">{os.title}</h2>
                <div className="grid grid-cols-3 mt-3 gap-2">
                  {
                    os.articles.map(news => <NewsCard key={news.id} news={news} />)
                  }
                </div>

              </div>)
            }
          </div>
        </div>
        {/* most read section */}
        <div className="  col-span-1">
          <MostRead />
        </div>
      </div>

    </div>
  );
}
