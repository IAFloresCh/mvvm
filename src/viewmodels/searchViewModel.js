import MovieService from "../services/movieService";

class SearchViewModel {
  static async searchMovies(query) {
    const search = await MovieService.searchMovies(query);
    return search.results;
  }
}

export default SearchViewModel;
