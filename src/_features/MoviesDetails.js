"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "…"; 
export const MoviesDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`${BASE_URL}/movie/${id}?language=en-US`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div className="text-white">Loading...</div>;

  return (
    <div className="text-white p-10">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};
