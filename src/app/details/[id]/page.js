"use client";
 
import Footer from "@/_features/Footer";
import Header from "@/_features/Header";
import { Badge } from "@/components/ui/badge";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import MovieCard from "@/_components/MovieCard";
import { LoadingMovieList } from "@/_features/home/_loading/LoadingMovieList";
import { StarIcon } from "@/_icons/StarIcon";
import { ArrowRight } from "@/_icons/ArrowRight";
 
const BASE_URL = "https://api.themoviedb.org/3";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY";
  
const MovieDetailsCard = ({ rating, className }) => {
  const [movieData, setMoviedata] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);
  const [directorData, setDirectorData] = useState([]);
 
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = useParams();
 
  const getData = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const detailMovieEndpoint = `${BASE_URL}/movie/${id}?language=en-US`;
      const directorMovieEndpoint = `${BASE_URL}/movie/${id}/credits?language=en-US`;
      const trailerVideoEndpoint = `${BASE_URL}/movie/${id}/videos?language=en-US`;
      const similarMovieEndpoint = `${BASE_URL}/movie/${id}/similar?language=en-US&page=1`;
 
      const [detailRes, similarRes, videoRes, directorRes] = await Promise.all([
        fetch(detailMovieEndpoint, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }),
        fetch(similarMovieEndpoint, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }),
        fetch(trailerVideoEndpoint, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }),
        fetch(directorMovieEndpoint, {
          headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        }),
      ]);
 
      const detailData = await detailRes.json();
      const similarData = await similarRes.json();
      const videosData = await videoRes.json();
      const directorData = await directorRes.json();
      console.log("similarData", similarData);
 
      const trailerVideo = videosData.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      setTrailer(trailerVideo ? trailerVideo.key : null);
      setMovieDetail(detailData);
      setMoviedata(similarData.results);
      setDirectorData(directorData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    getData();
  }, [id]);
  if (loading) {
    return <LoadingMovieList />;
  }
  const handleSeeMoreButton = () => {
  router.push(`/similar/${id}`);
};

 
  const directors = directorData?.crew?.filter(
    (data) => data.job === "Director"
  );
  const writers = directorData?.crew?.filter(
    (member) =>
      member.job === "Writer" ||
      member.job === "Screenplay" ||
      member.job === "Story"
  );
  const stars = directorData?.cast
    ?.slice(0, 5)
    .map((actor) => actor.name)
    .join(", ");
 
  console.log("Writers", writers);
  console.log("Stars", stars);
  console.log("movieData", movieData);
  console.log("movieDetail", movieDetail);
  console.log("directorData", directorData);
 
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <Header />
      <div className=" max-w-[1080px] mx-auto w-full ">
        <div className="max-w-[1080px] w-full ">
          <div className="flex flex-row  justity-center justify-between mt-[32px] ">
            <div className="flex flex-col ">
              <p className="text-2xl font-extrabold">{movieDetail.title}</p>
              <p className="mt-[4px]">{movieDetail.release_date} </p>
            </div>
            <div className=" flex flex-col ">
              <p>Rating </p>
              <div className="flex flex-row mt-[4px]">
                <StarIcon/>
                <p className=" text-base "> {rating} </p>
 
                <p className="text-lg text-neutral-400 ">/10</p>
              </div>
            </div>
          </div>
          {movieDetail && (
            <div className="flex flex-row justify-between items-center w-full mt-[24px]">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt={movieDetail.title}
                className="w-[290px] h-[428px] "
              />
              {trailer ? (
                <iframe
                  src={`https://www.youtube.com/embed/${trailer}`}
                  title={movieDetail.title}
                  className="w-[760px] h-[428px] rounded-[4px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w780${movieDetail.backdrop_path}`}
                  alt={movieDetail.title}
                  className="w-[760px] h-[428px] rounded-[4px]"
                />
              )}
            </div>
          )}
 
          <div className="flex flex-col gap-2  max-w-[1300px] w-full">
            <div className="flex gap-[12px] mt-[32px] ">
              {movieData?.slice(0, 5).map((movie) => (
                <Badge
                  key={movie.id}
                  className="bg-white text-black font-semibold border border-gray-300 pl-[10px] pr-[10px]"
                >
                  {movie.title}
                </Badge>
              ))}
            </div>
            <p className="mt-[20px]">{movieDetail.overview}</p>
          </div>
          <table className="border-collapse w-full max-w-[1300px] mt-[20px]">
            <tbody>
              <tr className="border-b border-gray-300">
                <th className="text-left p-2">Director</th>
                <td className="p-2">
                  {directors?.map((d) => d.name).join(",")}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <th className="text-left p-2">Writers</th>
                <td className="p-2">
                  {" "}
                  {writers?.map((w) => w.name).join(",")}
                </td>
              </tr>
              <tr>
                <th className="text-left p-2">Stars</th>
                <td className="p-2">{stars}</td>
              </tr>
            </tbody>
          </table>
 
          <div className="flex justify-between items-center mt-[32px]">
                    <p className="text-[34px] font-semibold">More like this</p>
                    <button
                      className="h-[36px] w-[120px] flex items-center justify-center gap-[8px] cursor-pointer text-lg"
                      onClick={handleSeeMoreButton}
                    >
                      See more
                      <ArrowRight />
                    </button>
                  </div>
          <div className="w-full flex gap-[32px] mt-[32px]">
            {movieData.slice(0, 5).map((movie) => (
              <MovieCard
                minimumWidth="190px"
                minimumHeigth="372px"
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                rating={movie.vote_average}
                 variant="details"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MovieDetailsCard;

