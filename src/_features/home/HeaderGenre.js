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
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


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

    setMovieListData(data.results);
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

        <DropdownMenuContent className="w-56 items-start w-[577px] h-[333px] pd-[20px]" >
         <div className="flex flex-col gap-[4px]">
            <p className="font-[24px] font-semibold inter"> Genres</p>
            <p className="font-base inter">See lists of movies by genre</p>
         </div>

         <div>
         <div>
          <div className="flex w-full flex-wrap gap-2 grid grid-cols-5">
            {data?.map((movie)=>(
           <Badge 
           key={movie.id} className="bg-white text-black border border-gray-300">
            {movie.name}
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
