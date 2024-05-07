import React from "react";
import { useQuery } from "react-query";
import NewsCard from "./NewsCard";
import { Skeleton } from "./components/ui/skeleton";

const NewsList: React.FC = () => {
  const { isLoading, error, data } = useQuery("news", async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2024-05-04&to=2024-05-04&sortBy=popularity&apiKey=c10fad271ac04705af6f553aa6031dc8"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-4/5">
      <div className="w-4/5 h-80 rounded-full flex items-center">
        <Skeleton className="w-full h-full bg-neutral-100" />
      </div>
      </div>
    );
   if (error) return "An error has occurred: " + (error as Error).message;


  return (
    <div className="news-list p-10">
      {data.articles.map((article: any) => (
        <NewsCard
          key={article.url}
          title={article.title}
          name={article.source.name}
          description={article.description}
          content={article.content}
          url={article.url}
          imageUrl={article.urlToImage}
          author={article.author}
          publishedDate={article.publishedAt}
        />
      ))}
    </div>
  );
};

export default NewsList;
