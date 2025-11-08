// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Header from "@/_features/Header";
// import Footer from "@/_features/Footer";

// const BASE_URL = "https://api.themoviedb.org/3";
// const ACCESS_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

// export const MoviesDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [videos, setVideos] = useState([]);
//   const [similarMovies, setSimilarMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showTrailer, setShowTrailer] = useState(false);

//   const getMovieDetails = async () => {
//     try {
//       const endpoint = `${BASE_URL}/movie/${id}?language=en-US`;
//       const response = await fetch(endpoint, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setMovie(data);
//     } catch (error) {
//       console.error("Error fetching movie details:", error);
//     }
//   };

//   const getMovieVideos = async () => {
//     try {
//       const endpoint = `${BASE_URL}/movie/${id}/videos?language=en-US`;
//       const response = await fetch(endpoint, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setVideos(data.results || []);
//     } catch (error) {
//       console.error("Error fetching movie videos:", error);
//     }
//   };

//   const getSimilarMovies = async () => {
//     try {
//       const endpoint = `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`;
//       const response = await fetch(endpoint, {
//         headers: {
//           Authorization: `Bearer ${ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await response.json();
//       setSimilarMovies(data.results || []);
//     } catch (error) {
//       console.error("Error fetching similar movies:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchAll = async () => {
//       await Promise.all([
//         getMovieDetails(),
//         getMovieVideos(),
//         getSimilarMovies(),
//       ]);
//       setLoading(false);
//     };
//     fetchAll();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen text-white text-xl">
//         Loading...
//       </div>
//     );
//   }

//   if (!movie)
//     return <div className="text-center text-white">Movie not found.</div>;

//   const trailer = videos.find(
//     (vid) => vid.type === "Trailer" && vid.site === "YouTube"
//   );

//   return (
//     <div className="w-full min-h-screen flex flex-col items-center bg-gray-950 text-white">
//       <Header />

//       <div className="max-w-5xl w-full p-6 mt-6">
//         <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
//         <p className="text-gray-300 mb-4">{movie.overview}</p>

//         <div className="flex flex-wrap gap-4 mb-4">
//           <p>
//             <strong>Release Date:</strong> {movie.release_date}
//           </p>
//           <p>
//             <strong>Rating:</strong> ⭐ {movie.vote_average} ({movie.vote_count}{" "}
//             votes)
//           </p>
//           <p>
//             <strong>Genres:</strong>{" "}
//             {movie.genres?.map((g) => g.name).join(", ")}
//           </p>
//         </div>

//         {trailer ? (
//           <button
//             onClick={() => setShowTrailer(true)}
//             className="px-6 py-2 bg-red-600 rounded hover:bg-red-700 transition"
//           >
//             ▶ Play Trailer
//           </button>
//         ) : (
//           <p className="text-gray-400">No trailer available.</p>
//         )}

//         {showTrailer && trailer && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//             <div className="relative w-full max-w-3xl aspect-video">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={`https://www.youtube.com/embed/${trailer.key}`}
//                 title="YouTube trailer"
//                 allowFullScreen
//               />
//               <button
//                 className="absolute top-2 right-2 bg-red-600 px-3 py-1 rounded"
//                 onClick={() => setShowTrailer(false)}
//               >
//                 ✕ Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="max-w-5xl w-full p-6">
//         <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {similarMovies.map((m) => (
//             <div key={m.id} className="bg-gray-800 rounded overflow-hidden">
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
//                 alt={m.title}
//                 className="w-full h-64 object-cover"
//               />
//               <p className="p-2 text-center">{m.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };




"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/_features/Header";
import Footer from "@/_features/Footer";
import MovieCard from "@/_components/MovieCard";
import { ArrowRight } from "lucide-react";

const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";

export default function MovieDetailsPage() { 
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);

  const getMovieDetails = async () => {
    try {
      const endpoint = `${BASE_URL}/movie/${id}?language=en-US`;
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const getMovieVideos = async () => {
    try {
      const endpoint = `${BASE_URL}/movie/${id}/videos?language=en-US`;
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setVideos(data.results || []);
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  const getSimilarMovies = async () => {
    try {
      const endpoint = `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`;
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSimilarMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching similar movies:", error);
    }
  };

  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        getMovieDetails(),
        getMovieVideos(),
        getSimilarMovies(),
      ]);
      setLoading(false);
    };
    fetchAll();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Loading...
      </div>
    );
  }

  if (!movie)
    return <div className="text-center text-white">Movie not found.</div>;

  const trailer = videos.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );
    const handleSeeMoreButton = () => {
    router.push(`/movies/${type}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white text-black">
      <Header />
        {trailer ? (
          <button
            onClick={() => setShowTrailer(true)}
            className="px-6 py-2 bg-red-600 rounded hover:bg-red-700 transition"
          >
            ▶ Play Trailer
          </button>
        ) : (
          <p className="text-gray-400">No trailer available.</p>
        )}

        {showTrailer && trailer && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube trailer"
                allowFullScreen
              />
              <button
                className="absolute top-2 right-2 bg-red-600 px-3 py-1 rounded"
                onClick={() => setShowTrailer(false)}
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}

        <div className="text-2xl flex justify-between w-[1440px]">More like this
              <button
                className="h-[36px] w-[120px] flex items-center justify-center gap-[8px] cursor-pointer text-lg"
                onClick={handleSeeMoreButton}
              >
                See more
                <ArrowRight />
              </button>
              </div>

  <div className="grid grid-cols-5 flex gap-[32px]">
    {similarMovies.slice(0,5).map((m) => (
      <MovieCard
        key={m.id}
        id={m.id}
        title={m.title}
        imageUrl={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
        rating={m.vote_average}
      />
    ))}
  </div>
  <Footer />
    </div>
  );
}
