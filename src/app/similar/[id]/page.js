// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import MovieCard from "@/_components/MovieCard";
// import Header from "@/_features/Header";
// import Footer from "@/_features/Footer";

// const BASE_URL = "https://api.themoviedb.org/3";
// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

// export default function SimilarMoviesPage() {
//   const { id } = useParams();
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const getSimilarMovies = async () => {
//     if (!id) return;
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`,
//         {
//           headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//         }
//       );
//       const data = await res.json();
//       setMovies(data.results || []);
//     } catch (err) {
//       console.error("Error fetching similar movies:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getSimilarMovies();
//   }, [id]);

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center">
//       <Header />
//       <div className="w-[1440px] mt-[52px]">
//         <p className="text-[34px] font-semibold">More Like This</p>
//       </div>

//       {loading ? (
//         <div className="mt-[40px] text-lg font-medium">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-5 gap-[72px] w-[1440px] mt-[32px]">
//           {movies.slice(0, 10).map((movie) => (
//             <MovieCard
//               key={movie.id}
//               id={movie.id}
//               title={movie.title}
//               imageUrl={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                   : "/no-image.jpg"
//               }
//               rating={movie.vote_average}
//               minimumWidth="190px"
//               minimumHeight="435px"
//             />
//           ))}
//         </div>
//       )}
//       <div className="w-[1440px] flex justify-end mt-[32px]">
//         <Pagination>
//           <PaginationContent>
//             <PaginationItem>
//               <PaginationPrevious
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handlePreviousPage();
//                 }}
//               >
//                 Previous
//               </PaginationPrevious>
//             </PaginationItem>

//             {[...Array(5)].map((_, index) => {
//               const num = index + 1;
//               return (
//                 <PaginationItem key={num}>
//                   <PaginationLink
//                     href="#"
//                     isActive={page === num}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setPage(num);
//                     }}
//                   >
//                     {num}
//                   </PaginationLink>
//                 </PaginationItem>
//               );
//             })}

//             <PaginationItem>
//               <PaginationEllipsis />
//             </PaginationItem>

//             <PaginationItem>
//               <PaginationNext
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleNextPage();
//                 }}
//               >
//                 Next
//               </PaginationNext>
//             </PaginationItem>
//           </PaginationContent>
//         </Pagination>
//       </div>
//       <Footer />
//     </div>
//   );
// }



"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import MovieCard from "@/_components/MovieCard";
import Header from "@/_features/Header";
import Footer from "@/_features/Footer";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN = "YOUR_ACCESS_TOKEN";

export default function SimilarMoviesPage() {
  const { id } = useParams();
  console.log(" ID from params:", id);  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getSimilarMovies = async () => {
    if (!id) return;
    setLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}/similar?language=en-US&page=${page}`,
        {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }
      );

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error("Error fetching similar movies:", err);
    } finally {
      setLoading(false);
    }
  };
  console.log("ID from params:", id);

  useEffect(() => {
    getSimilarMovies();
  }, [id, page]);


  const handlePreviousPage = () => page > 1 && setPage(page - 1);
  const handleNextPage = () => setPage(page + 1);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <div className="w-[1440px] mt-[52px]">
        <p className="text-[34px] font-semibold">More Like This</p>
      </div>

      {loading ? (
        <div className="mt-[40px] text-lg font-medium">Loading...</div>
      ) : (
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {movies.slice(0, 10).map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/no-image.jpg"
              }
              rating={movie.vote_average}
              minimumWidth="190px"
              minimumHeight="435px"
            />
          ))}
        </div>
      )}

      <div className="w-[1440px] flex justify-end items-end mt-[32px]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePreviousPage(); }}>
                Previous
              </PaginationPrevious>
            </PaginationItem>

            {[...Array(5)].map((_, index) => {
              const num = index + 1;
              return (
                <PaginationItem key={num}>
                  <PaginationLink
                    href="#"
                    isActive={page === num}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(num);
                    }}
                  >
                    {num}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handleNextPage(); }}>
                Next
              </PaginationNext>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <Footer />
    </div>
  );
}
