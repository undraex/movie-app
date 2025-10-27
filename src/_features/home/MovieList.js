"use client";

import MovieCard from "@/_components/MovieCard";
import { ArrowRight } from "@/_icons/ArrowRight";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function MovieList({ type }) {
  const router = useRouter();
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieListData = async () => {
    setLoading(true);
    const movieListEndpoint = `${BASE_URL}/movie/${param.type}?language=en-US&page=1`;
    const response = await fetch(movieListEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setMovieListData(data.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovieListData();
    // getData();
  }, []);

const handleSeeMoreButton = () =>{
  router.push("/movies/${type}")
}

  return (
    <div className="flex justify-around min-w-[1440px] items-center">
      <div className="">
        <div className="flex justify-between ">
          <div className=" text-2xl font-semibold justify-between">{type}</div>
          <button className="h-[36px] w-[120px] flex items-center justify-center gap-[8px]">
            See more
            <ArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-[32px]">
          {movieListData.slice(0, 10).map((movie, index) => {
            return (
              <MovieCard
                key={index}
                title={movie.title}
                // imageUrl={movie.backdrop_path}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}