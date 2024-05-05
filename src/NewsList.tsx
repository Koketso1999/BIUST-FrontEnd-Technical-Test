import React from "react";
import { useQuery } from "react-query";
import NewsCard from "./NewsCard";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="news-list">
      {data.articles.map((article: any) => (
        <NewsCard
          key={article.url}
          title={article.title}
          description={article.description}
          url={article.url}
          imageUrl={article.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
