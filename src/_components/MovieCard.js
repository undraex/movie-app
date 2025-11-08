import { useRouter } from "next/navigation";
import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function MovieCard({ rating, title, imageUrl, id }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/details/${id}`)}
      className="cursor-pointer"
    >
      <div className="w-[230px] h-[435px] bg-neutral-200 rounded-sm shadow-md overflow-hidden">
        <div
          className="w-[230px] h-[340px] bg-cover bg-center rounded-t-sm"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="p-[8px] text-black">
          <div className="flex items-center gap-[4px] mb-1">
            <StarIconSmall />
            <p className="text-sm font-medium text-black">
              {Math.round(rating)}
              <span className="text-xs text-[#71717A]">/10</span>
            </p>
          </div>
          <p className="text-lg line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
}

