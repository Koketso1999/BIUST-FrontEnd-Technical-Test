import React from "react";
import { useQuery } from "react-query";
import NewsCard from "./NewsCard";
import { Skeleton } from "./components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Terminal } from "lucide-react";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";



const NewsList: React.FC = () => {
    const { toast } = useToast();
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
      <div className="w-[100px] h-[20px] rounded-full">
        <Skeleton className="w-full h-full" />
      </div>
    );
  if (error)
    return () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was an error fetching the news.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    };
  
  
  
  
  // (
  //     <Alert variant="destructive">
  //       <Terminal className="h-4 w-4" />
  //       <AlertTitle>Heads up!</AlertTitle>
  //       <AlertDescription>Error: {(error as Error).message}</AlertDescription>
  //     </Alert>
  //   );

  console.log(data);

  return (
    //
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
