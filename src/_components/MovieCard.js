import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function MovieCard({ rating, title, imageUrl }) {
  // const imageUrl = `https://image.tmdb.org/t/p/${imageUrl}`;
  // imageUrl={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}

  return (
    <div>
      <div className="w-[230px] h-[435px] bg-neutral-200 rounded-sm ">
        <div
          className="w-[230px] h-[340px] bg-cover bg-center rounded-t-lg "
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
       <div className="p-[8px]">
         <div className="flex items-center gap-[4px]">
          <StarIconSmall />
          <p className="text-black text-sm font-medium"></p>
       {Math.round(rating)}
          <p className="text-xs text-[#71717A]">/10</p>
        </div>
        <div className=" flex text-lg ">{title}</div>
       </div>
      </div>
    </div>
  );
}
