import axios from 'axios';
const API_KEY = 'fb16fb8d72c2b1b51619ebc618e9b844';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


export async function getTrendingFilms() {
  try {
    const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getFilmById(id: string) {
  try {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// https://api.themoviedb.org/3/&language=en-US
export async function getFilmCast(id: string) {
  try {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getFilmReview(id: string) {
  try {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getFilsByTitle(title: string) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${title}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
