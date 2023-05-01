import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsViewModel from "../viewmodels/movieDetailsViewModel";


function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const movie = await MovieDetailsViewModel.getMovieById(id);
        setMovie(movie);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    fetchMovie();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <img src={movie.posterUrl} alt={movie.title} />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
