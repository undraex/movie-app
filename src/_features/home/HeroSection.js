// import { PlayIcon } from "@/_icons/PlayIcon";
// import { StarIcon } from "@/_icons/StarIcon";
// import { useState, useEffect } from "react";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import LoadingHeroList from "./_loading/LoadingHeroList";

// const BASE_URL = "https://api.themoviedb.org/3";
// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

// export default function HeroSection() {
//   const [movieListData, setMovieListData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getMovieListData = async () => {
//     try {
//       setLoading(true);
//       const movieListEndpoint = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;
//       const response = await fetch(movieListEndpoint, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setMovieListData(data.results || []);
//     } catch (error) {
//       console.error("Error fetching movie data:", error);
//     } finally {
//       setTimeout(() => setLoading(false), 1000);
//     }
//   };

//   useEffect(() => {
//     getMovieListData();
//   }, []);

//   if (loading) {
//     return <LoadingHeroList />;
//   }   

//   const movies = movieListData.map((movie) => ({
//         title: movie.title,
//         rating: movie.vote_average?.toFixed(1),
//         description: movie.overview,
//         image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
//       }))


//   const backgroundImage = movies[0].image;

//   return (
//     <div
//       className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="absolute inset-0 bg-black/40" />

//       <div className="relative max-w-[1440px] w-full">
//         <Carousel className="w-full">
//           <CarouselContent>
//             {movies.map((movie, index) => (
//               <CarouselItem key={index}>
//                 <div
//                   className="h-[600px] bg-cover bg-center bg-no-repeat flex items-center px-[140px]"
//                   style={{ backgroundImage: `url(${movie.image})` }}
//                 >
//                   <div className="max-w-[400px] z-10">
//                     <p className="text-base font-inter text-white mb-2">
//                       Now playing:
//                     </p>
//                     <p className="text-4xl font-inter text-white font-bold mb-2">
//                       {movie.title}
//                     </p>

//                     <div className="flex items-center mb-3">
//                       <StarIcon />
//                       <div className="text-white text-lg font-inter ml-1">
//                         {movie.rating}
//                       </div>
//                       <div className="text-base font-inter text-[#71717A] ml-1">
//                         /10
//                       </div>
//                     </div>

//                     <p className="text-xs text-white font-inter h-[80px] w-[308px] mb-4 line-clamp-4">
//                       {movie.description}
//                     </p>

//                     <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px]">
//                       <PlayIcon />
//                       Watch trailer
//                     </button>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

"use client";

import { PlayIcon } from "@/_icons/PlayIcon";
import { StarIcon } from "@/_icons/StarIcon";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import LoadingHeroList from "./_loading/LoadingHeroList";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function HeroSection() {
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovieListData = async () => {
    try {
      const endpoint = `${BASE_URL}/movie/now_playing?language=en-US&page=1`;
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMovieListData(data.results || []);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  useEffect(() => {
    getMovieListData();
  }, []);

  if (loading) {
    return <LoadingHeroList />;
  }

  const movies = movieListData.map((movie) => ({
    title: movie.title,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : "N/A",
    description: movie.overview || "No description available.",
    image: movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "/fallback-image.jpg", 
  }));

  if (movies.length === 0) {
    return (
      <div className="h-[600px] flex items-center justify-center bg-black text-white">
        No movies available.
      </div>
    );
  }

  return (
    <div className="relative h-[600px] flex items-center justify-center bg-black">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-[1440px] w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {movies.slice(0,5).map((movie, index) => (
              <CarouselItem key={index}>
                <div
                  className="h-[600px] bg-cover bg-center bg-no-repeat flex items-center px-[140px] relative"
                  style={{ backgroundImage: `url(${movie.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />

                  <div className="relative max-w-[400px] z-10">
                    <p className="text-base font-inter text-white mb-2">
                      Now playing:
                    </p>
                    <p className="text-4xl font-inter text-white font-bold mb-2">
                      {movie.title}
                    </p>

                    <div className="flex items-center mb-3">
                      <StarIcon />
                      <div className="text-white text-lg font-inter ml-1">
                        {movie.rating}
                      </div>
                      <div className="text-base font-inter text-[#A1A1AA] ml-1">
                        /10
                      </div>
                    </div>

                    <p className="text-xs text-white font-inter h-[80px] w-[308px] mb-4 line-clamp-4">
                      {movie.description}
                    </p>

                    <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px] hover:bg-gray-200 transition">
                      <PlayIcon />
                      Watch trailer
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
