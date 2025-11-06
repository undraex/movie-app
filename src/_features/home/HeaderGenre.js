"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DownArrow } from "@/_icons/DownArrow";
import { Badge } from "@/components/ui/badge"
import { GenreArrowIcon } from "@/_icons/GenreArrowIcon";
import { LineIcon } from "@/_icons/LineIcon";

const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export const HeaderGenre = (props) => {
  const { type } = props;
  const router = useRouter();
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovieListData = async () => {
    setLoading(true);
    const movieListEndpoint = `${BASE_URL}/genre/movie/list?language=en`;
    const response = await fetch(movieListEndpoint, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setMovieListData(data.genres);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    getMovieListData();
  }, []);


  return (
    <div className=" rounded-lg bg-[#FFF] flex flex-col items-start pd-[20px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {" "}
            <DownArrow />
            Genre
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 items-start w-[600px] h-[280px] p-[20px]" >
         <div className="flex flex-col gap-[4px]">
            <p className="font-[24px] font-semibold inter"> Genres</p>
            <p className="text-base inter">See lists of movies by genre</p>
         </div>
         <LineIcon/>
         <div>
         <div>
        <div className="grid grid-cols-5 flex gap-[16px]">
              {movieListData.map((genre) => (
                <Badge
                  key={genre.id}
                  className="bg-white text-black border border-gray-300 hover:bg-gray-100 cursor-pointer flex items-center justify-between font-semibold"
                  onClick={() => router.push(`/genre/${genre.id}`)}
                >
                  {genre.name}
                  <GenreArrowIcon/>
                </Badge>
              ))}
            </div>
          </div>
         </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};


