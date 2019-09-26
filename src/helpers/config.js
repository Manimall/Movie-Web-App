// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e1b6e403e751becc08ff59d3852b5685';

const LANG = 'en-US';
const INITIAL_PAGE = '1';

const EXAMPLE_API_REQUEST = `${API_URL}/movie/550?api_key=${API_KEY}`;
const POPULAR_MOVIES_REQUEST = (
  `${API_URL}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${INITIAL_PAGE}`
);

// Images
// An image URL looks like this example:
// http://image.tmdb.org/t/p/w780/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const NO_IMAGE_URL = `${process.env.PUBLIC_URL}/images/no_image.jpg`;

const VIDEO_URL = 'https://www.youtube.com/embed/';

const generateImageUrl = (imageSize) => (imagePath) => (
  imagePath
    ? `${IMAGE_BASE_URL}${imageSize}${imagePath}`
    : NO_IMAGE_URL
);

//Sizes: w300, w780, w1280, original
// w92, w154, w185, w342, w500, w780, original
const getBackdropUrl = generateImageUrl('w1280');
const getPosterUrl = generateImageUrl('w500');
const getThumbUrl = generateImageUrl('w300');
const getProfileUrl = generateImageUrl('w154');


export {
  API_URL,
  API_KEY,
  LANG,
  getBackdropUrl,
  getPosterUrl,
  getThumbUrl,
  getProfileUrl,
  VIDEO_URL,
}
