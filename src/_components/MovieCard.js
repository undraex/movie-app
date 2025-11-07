// import { StarIconSmall } from "@/_icons/StarIconSmall";

// export default function MovieCard({ rating, title, imageUrl, id, onClick }) {
//   return (
//     <div>
//       onClick={onClick}
//       <div className="w-[230px] h-[435px] bg-neutral-200 rounded-sm ">
//         <div
//           className="w-[230px] h-[340px] bg-cover bg-center rounded-t-lg "
//           style={{ backgroundImage: `url(${imageUrl})` }}
//         ></div>
//        <div className="p-[8px]">
//          <div className="flex items-center gap-[4px]">
//           <StarIconSmall />
//           <p className="text-black text-sm font-medium"></p>
//        {Math.round(rating)}
//           <p className="text-xs text-[#71717A]">/10</p>
//         </div>
//         <div className=" flex text-lg ">{title}</div>
//        </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { StarIconSmall } from "@/_icons/StarIconSmall";

// export default function MovieCard({ rating, title, imageUrl, id, onClick }) {
//   return (
//     <div
//       onClick={onClick} 
//       className="cursor-pointer hover:scale-105 transition-transform duration-300"
//     >
//       <div className="w-[230px] h-[435px] bg-neutral-200 rounded-sm shadow-md overflow-hidden">
//         <div
//           className="w-[230px] h-[340px] bg-cover bg-center rounded-t-sm"
//           style={{ backgroundImage: `url(${imageUrl})` }}
//         ></div>
//         <div className="p-[8px] text-black">
//           <div className="flex items-center gap-[4px] mb-1">
//             <StarIconSmall />
//             <p className="text-sm font-medium text-black">
//               {Math.round(rating)}
//               <span className="text-xs text-[#71717A]">/10</span>
//             </p>
//           </div>
//           <p className="text-lg font-semibold line-clamp-2">{title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useRouter } from "next/navigation";
import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function MovieCard({ rating, title, imageUrl, id }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${id}`)}
      className="cursor-pointer hover:scale-105 transition-transform duration-300"
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
          <p className="text-lg font-semibold line-clamp-2">{title}</p>
        </div>
      </div>
    </div>
  );
}

