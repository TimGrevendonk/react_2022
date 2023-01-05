import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { recoilNewsItems } from "../store";
import NewsItem from "../components/news_item";
import { useEffect } from "react";

export default function NewsList() {
  const newsItems = useRecoilValue(recoilNewsItems);

  return (
    <section>
      <div className="row">
        {newsItems.map((post) => {
          return (
            <div key={post.url} className="columns large-3 medium-6">
              <NewsItem post={post} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
