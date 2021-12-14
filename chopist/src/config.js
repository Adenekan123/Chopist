// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = 'https://themealdb.com/api/json/v1/';
const API_KEY = "1";

const SEARCH_BASE_URL = `${API_URL}${API_KEY}/search.php?s=`;
const ALL_BASE_URL = `${API_URL}${API_KEY}/search.php?f=s`;
const LEFTTERS_BASE_URL = `${API_URL}${API_KEY}/search.php?f=`;
const ONE_BASE_URL = `${API_URL}${API_KEY}/lookup.php?i=`;
const CATEGORIES_BASE_URL = `${API_URL}${API_KEY}/list.php?c=`;
const CATEGORIES_SEARCH_URL = `${API_URL}${API_KEY}/filter.php?c=`;
const AREAS_BASE_URL = `${API_URL}${API_KEY}/list.php?a=list`;
const AREAS_SEARCH_URL = `${API_URL}${API_KEY}/filter.php?a=`;
// For login and voting
// const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
// const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
// const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  API_URL,
  SEARCH_BASE_URL,
  ALL_BASE_URL,
  ONE_BASE_URL,
  CATEGORIES_BASE_URL,
  CATEGORIES_SEARCH_URL,
  LEFTTERS_BASE_URL,
  AREAS_BASE_URL,
  AREAS_SEARCH_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  // REQUEST_TOKEN_URL,
  // LOGIN_URL,
  // SESSION_ID_URL,
};
