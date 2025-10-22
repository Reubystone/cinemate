import { Link } from "react-router-dom";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const images = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg  p-4 dark:text-gray-500 h-48 w-96 object-cover"
          src={images}
          alt="Movie-Image"
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
