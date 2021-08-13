const KEY = "1d63ca7778fba9fcb5c7eaba2ba9f3e7";
const BaseUrl = "https://api.themoviedb.org/3";
async function fetchWithError(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("not found"));
}
export function fetchTrendingMovies() {
    return fetchWithError(`${BaseUrl}/trending/all/day?api_key=${KEY}`)
};

export function fetchSearchMovie(query) {
    return fetchWithError(`${BaseUrl}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
};

export function fetchInfoMovie(movieId) {
    return fetchWithError(`${BaseUrl}/movie/${movieId}?api_key=${KEY}&language=en-US`)
};

export function fetchCastMovie(movieId) {
    return fetchWithError(`${BaseUrl}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
};



export function fetchReviewsMovie(movieId) {
    return fetchWithError(`${BaseUrl}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`)
};