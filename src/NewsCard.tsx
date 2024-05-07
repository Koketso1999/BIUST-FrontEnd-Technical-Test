import React, { useState } from "react";
import { Card, CardDescription, CardHeader } from "./components/ui/card";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  name: string;
  description: string;
  content: string;
  url: string;
  imageUrl: string;
  author: string;
  publishedDate: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  name,
  description,
  content,
  url,
  imageUrl,
  author,
  publishedDate,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleSeeMore = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="news-card my-10 border-none border-transparent mb-10 hover:cursor-pointer">
      <div
        className="bg-cover bg-center h-48 relative"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <CardHeader className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </CardHeader>
      </div>
      <CardDescription className="p-4">
        <p className="text-xs md:text-base my-6 text-neutral-500">
          {description}
        </p>
        {expanded && (
          <div>
            <p className="text-xs md:text-sm text-cyan-800">Author: {author}</p>
            <p className="text-xs md:text-sm text-cyan-800">
              Published Date: {publishedDate}
            </p>

            <p className="text-xs md:text-base my-6 text-neutral-800">
              {content}{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline"
              >
                Continue reading at {name}
              </a>
            </p>
          </div>
        )}

        <motion.button
          onClick={handleSeeMore}
          className="text-cyan-700 hover:underline mt-5"
          whileHover={{ scale: 1.1 }}
        >
          {expanded ? (
            <IoArrowUpCircleOutline className="text-cyan-700 text-6xl" />
          ) : (
            <IoArrowDownCircleOutline className="text-cyan-700 text-6xl" />
          )}
        </motion.button>
      </CardDescription>

      <hr className="my-10" />
    </Card>
  );
};

export default NewsCard;
