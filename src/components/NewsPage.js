import React, { useEffect, useState } from 'react';
import { newsService } from '../services/NewsService';
import Card from './Card';


const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', 
    gridGap: '20px', 
    padding: '20px',
  },

};

const NewsPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const allNews = await newsService.getAllNews();
        setNews(allNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={styles.gridContainer}>
      {news.length > 0 ? (
        news.map((article) => (
          <Card key={article.id} title={article.title} content={article.content} image={article.image}/>
        ))
      ) : (
        <p>No news to display</p>
      )}
    </div>
  );
};

export default NewsPage;