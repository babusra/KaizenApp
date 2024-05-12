import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.extrazone.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTags = async () => {
  try {
    const response = await api.get('/tags/list', {
      headers: {
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getPromotionsList = async () => {
  try {
    const response = await api.get('/promotions/list?Channel=PWA');
    return response.data;
  } catch (error) {
    console.error('Error fetching promotions list:', error);
    throw error;
  }
};

export const getPromotionById = async (id: string) => {
  try {
    const response = await api.get(`/promotions?Id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching promotion by id:', error);
    throw error;
  }
};

