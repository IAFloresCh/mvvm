import MovieService from "../services/movieService";

class MovieDetailsViewModel {
  static async getMovieById(id) {
    const movie = await MovieService.getMovieById(id);
    return movie;
  }
}

export default MovieDetailsViewModel;
