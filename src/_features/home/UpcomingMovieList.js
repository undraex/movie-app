import MovieCard from "@/_components/MovieCard";
import { ArrowRight } from "@/_icons/ArrowRight";
import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function UpcomingMovieList() {
  return (
    <div>
      <div className="flex justify-between">
        <div className=" text-2xl font-semibold justify-between">Upcoming</div>
        <button className="h-[36px] w-[120px] flex items-center justify-center gap-[8px]">
          See more
          <ArrowRight />
        </button>
      </div>
      <div className="grid-cols-5 flex spacing/8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}
