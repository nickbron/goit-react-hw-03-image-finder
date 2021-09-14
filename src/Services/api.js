import axios from 'axios';
const API_KEY = '22624023-cde2aba775d295bec8b1b2952';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPictures = async (name, page) => {
  const params =
    'image_type=photo$orientation=horizontal&safesearch=true&per_page=12';
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${name}&${params}&page=${page}`,
  );

  return response.data.hits;
};
