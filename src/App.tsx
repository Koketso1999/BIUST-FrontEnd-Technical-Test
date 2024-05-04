import React from "react";
import { usePost } from "./hooks/use-post";

const App = () => {
  // Get all the dynamic post data and loading state from the usePost hook
  const { data, isLoading } = usePost(1); // make the post
  console.log(data);

  //

  return (
    // <div>{isLoading ? 'Content is Loading' : JSON.stringify(data)}</div>
    <div>
      {isLoading ? (
        "Content is Loading"
      ) : (
        // Display the post data in a more readable format
        <div>
          <h1>Title: {data?.title}</h1>
          <p>Body: {data?.body}</p>
        </div>
      )}
    </div>
  );
};

export default App;
