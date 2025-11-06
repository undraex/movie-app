

// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import MovieCard from "@/_components/MovieCard";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import Header from "@/_features/Header";
// import Footer from "@/_features/Footer";

// const BASE_URL = "https://api.themoviedb.org/3";
// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

// export default function MoviesType() {
//   const param = useParams();
//   const [movieListData, setMovieListData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const categoryNames = {
//     upcoming: "Upcoming",
//     popular: "Popular",
//     top_rated: "Top Rated",
//   };

//   const getMovieListData = async () => {
//     if (!param?.type) return;
//     setLoading(true);

//     const movieListEndpoint = `${BASE_URL}/movie/${param.type}?language=en-US&page=${page}`;

//     try {
//       const response = await fetch(movieListEndpoint, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       setMovieListData(data.results || []);
//       setTotalPages(data.total_pages || 1);
//     } catch (err) {
//       console.error("Error fetching movie list:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getMovieListData();
//   }, [param?.type, page]);

//   const handlePreviousPage = () => {
//     if (page > 1) setPage((p) => p - 1);
//   };

//   const handleNextPage = () => {
//     if (page < totalPages) setPage((p) => p + 1);
//   };

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center">
//       <Header />
//       <div className="w-[1440px] mt-[52px]">
//         <p className="text-[34px] font-semibold">
//           {categoryNames[param.type] || "Movies"}
//         </p>
//       </div>
//       {loading ? (
//         <div className="mt-[40px] text-lg font-medium">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-5 gap-[72px] w-[1440px] mt-[32px] cursor-pointer">
//           {movieListData.slice(0, 10).map((movie, index) => (
//             <MovieCard
//               key={index}
//               title={movie.title}
//               imageUrl={
//                 movie.poster_path
//                   ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//                   : "/no-image.jpg"
//               }
//               rating={movie.vote_average}
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/_features/Header";
import Footer from "@/_features/Footer";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function MoviesType() {
  const param = useParams();
  const [movieListData, setMovieListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categoryNames = {
    upcoming: "Upcoming",
    popular: "Popular",
    top_rated: "Top Rated",
  };

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

  const handlePreviousPage = () => {
    if (page > 1) setPage((p) => p - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage((p) => p + 1);
  };

  // Pagination dynamic range
  const pagesPerGroup = 5;
  const currentGroup = Math.ceil(page / pagesPerGroup);
  const startPage = (currentGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />

      {/* Category Name */}
      <div className="w-[1440px] mt-[52px]">
        <p className="text-[34px] font-semibold">
          {categoryNames[param.type] || "Movies"}
        </p>
      </div>

    
      {loading ? (
        <div className="mt-[40px] text-lg font-medium">Loading...</div>
      ) : (
        <div className="grid grid-cols-5 gap-[72px] w-[1440px] mt-[32px] cursor-pointer">
          {movieListData.slice(0, 10).map((movie, index) => (
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

      {/* Pagination */}
      <div className="w-[1440px] flex justify-end mt-[32px] mb-[64px]">
        <Pagination>
          <PaginationContent>
            {/* Previous */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePreviousPage();
                }}
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>

            {/* Show previous ellipsis if not first group */}
            {startPage > 1 && (
              <>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {/* Visible Pages */}
            {visiblePages.map((num) => (
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
            ))}

            {/* Show next ellipsis if not last group */}
            {endPage < totalPages && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(totalPages);
                    }}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {/* Next */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNextPage();
                }}
              >
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
