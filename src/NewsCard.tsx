import React from "react";

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  description,
  url,
  imageUrl,
}) => {
  return (
    <div className="news-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
