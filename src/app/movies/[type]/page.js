// 

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "@/_components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function MoviesType() {
  const param = useParams(); // expects /movies/[type]
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ Fetch movies dynamically based on param.type + page
  const getMovieListData = async () => {
    if (!param?.type) return;
    setLoading(true);

    const movieListEndpoint = `${BASE_URL}/movie/${param.type}?language=en-US&page=${page}`;

    try {
      const response = await fetch(movieListEndpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setMovieListData(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error("Error fetching movie list:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovieListData();
  }, [param?.type, page]);

  // ✅ Handle pagination
  const handlePreviousPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6 capitalize">
        {param.type} Movies
      </h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-5 gap-6">
          {movieListData.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/no-image.jpg"
              }
              rating={movie.vote_average}
            />
          ))}
        </div>
      )}

      {/* ✅ Pagination Component */}
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handlePreviousPage();
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink href="#" isActive>
              {page}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNextPage();
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}


