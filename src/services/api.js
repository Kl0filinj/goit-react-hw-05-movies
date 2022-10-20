import axios from 'axios'; //
const API_KEY = 'fb16fb8d72c2b1b51619ebc618e9b844';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export async function getTrendingFilms() {
  try {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getFilmById(id) {
  try {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
