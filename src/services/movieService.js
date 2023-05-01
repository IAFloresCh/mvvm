import Movie from "../models/movie";
import Search from "../models/search";

class MovieService {
    static searchMovies(query) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() < 0.8) {
                    const allMovies = [
                        new Movie(
                            "1",
                            "The Shawshank Redemption",
                            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                            ""
                        ),
                        new Movie(
                            "2",
                            "The Godfather",
                            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                            ""
                        ),
                        new Movie(
                            "3",
                            "The Dark Knight",
                            "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                            ""
                        ),
                    ];
                    const filteredMovies = allMovies.filter(movie => {
                        return (
                            movie.title.toLowerCase().includes(query.toLowerCase()) ||
                            movie.description.toLowerCase().includes(query.toLowerCase())
                        );
                    });
                    const results = new Search(query, filteredMovies);
                    resolve(results);
                } else {
                    reject(new Error("Failed to fetch search results"));
                }
            }, 1000); // emulate a delay of 1 second
        });
    }

    static getMovieById(id) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {            
            const movies = [
              new Movie(
                "1",
                "The Shawshank Redemption",
                "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg"
              ),
              new Movie(
                "2",
                "The Godfather",
                "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
              ),
              new Movie(
                "3",
                "The Dark Knight",
                "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg"
              )
            ];
      
            const movie = movies.find(movie => movie.id === id);
      
            if (movie) {
              resolve(movie);
            } else {
              reject(new Error("Movie not found"));
            }
          }, 1000); // emulate a delay of 1 second
        });
      }
}

export default MovieService;
