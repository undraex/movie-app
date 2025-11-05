"use client";

import MovieCard from "@/_components/MovieCard";
import { ArrowRight } from "@/_icons/ArrowRight";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingMovieList } from "./_loading/LoadingMovieList";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

  const categoryNames = {
    upcoming: "Upcoming",
    popular: "Popular",
    top_rated: "Top Rated",
  };

export const MovieList = (props) => {
  const { type } = props;
  const router = useRouter();
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieListData = async () => {
    setLoading(true);
    const movieListEndpoint = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;
    const response = await fetch(movieListEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setMovieListData(data.results);
      setTimeout(() => {
      setLoading(false);
    }, 1000);
    
  };
  useEffect(() => {
    getMovieListData();
  }, []);

  if (loading ) {
    return <LoadingMovieList />;
  }

  const handleSeeMoreButton = () => {
    router.push(`/movies/${type}`);
  };

  return (
    <div className="flex justify-around w-full items-center">
      <div>
        <div className="flex justify-between items-center mt-[52px]">
          <p className="text-[34px]">{categoryNames[type]}</p>
          <button
            className="h-[36px] w-[120px] flex items-center justify-center gap-[8px] cursor-pointer text-lg"
            onClick={handleSeeMoreButton}
          >
            See more
            <ArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-[72px] w-[1440px] mt-[32px] cursor-pointer">
          {movieListData.slice(0, 10).map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
