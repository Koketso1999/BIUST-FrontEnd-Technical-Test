import React from "react";
import "./App.css";
import NewsList from "./NewsList";
import { QueryClient, QueryClientProvider } from "react-query";
import TopNav from "./components/TopNav";
import { BrowserRouter as Router } from "react-router-dom";
// import SingleBlogPage from "./SingleBlogPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <>
          <TopNav />

          <section className="">
            <h1 className="text-sm md:text-2xl font-bold text-cyan-700">
              Welcome to the Tesla News App
            </h1>

            <p className="text-sm md:lg text-gray-600 mt-4">
              All articles about Apple from the last month
            </p>
          </section>
          <section>
            <NewsList />
          </section>
        </>
      </QueryClientProvider>
    </Router>
  );
};

export default App;
