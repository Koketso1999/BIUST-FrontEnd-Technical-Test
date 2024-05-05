// import { usePost } from "./hooks/use-post";

// const App = () => {
//   // Get all the dynamic post data and loading state from the usePost hook
//   const { data, isLoading } = usePost(1); // make the post

//   //

//   return (

//     <div>
//       {isLoading ? (
//         "Content is Loading"
//       ) : (
//         // Display the post data in a more readable format
//         <div>
//           <h1>Title: {data?.title}</h1>
//           <p>Body: {data?.author}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React from "react";
import "./App.css";
import NewsList from "./NewsList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 className="text-2xl *:">All articles about Tesla from the last month</h1>
        <NewsList />
      </div>
    </QueryClientProvider>
  );
};

export default App;
