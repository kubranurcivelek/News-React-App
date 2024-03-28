
import axios from 'axios';

const API_URL = 'http://localhost:5000/news';

const getAllNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    throw error;
  }
};

const getNewsById = async (id) => {
  try {

    // get-> get data
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch news item with id ${id}:`, error);
    throw error;
  }
};

const createNews = async (newsItem) => {
  try {
    // post -> update and add
    const response = await axios.post(API_URL, newsItem);
    return response.data;
  } catch (error) {
    console.error("Failed to create news item:", error);
    throw error;
  }
};

export const newsService = {
  getAllNews,
  getNewsById,
  createNews,
};