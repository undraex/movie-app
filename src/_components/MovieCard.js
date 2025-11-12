import { useRouter } from "next/navigation";
import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function MovieCard({ rating, title, imageUrl, id, minimumWidth, minimumHeigth}) {
  const router = useRouter();
  const getMinimumWidth = minimumWidth || "230px"
  const getMinimumHeigth = minimumHeigth || "435px"

  return (
    <div
  onClick={() => router.push(`/details/${id}`)}
  className="cursor-pointer"
>
  <div
    style={{ width: getMinimumWidth, height: getMinimumHeigth }}
    className="bg-neutral-200 rounded-sm shadow-md overflow-hidden"
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        width: getMinimumWidth,
        height: "340px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="rounded-t-sm"
    />
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


// import { useRouter } from "next/navigation";
// import { StarIconSmall } from "@/_icons/StarIconSmall";

// export default function MovieCard({
//   rating,
//   title,
//   imageUrl,
//   id,
//   minimumWidth,
//   minimumHeight, 
// }) {
//   const router = useRouter();

//   const cardWidth = minimumWidth || "230px";
//   const cardHeight = minimumHeight || "372px";

//   return (
//     <div
//       onClick={() => router.push(`/details/${id}`)}
//       className="cursor-pointer"
//     >
//       <div
//         style={{ width: cardWidth, height: cardHeight }}
//         className="bg-neutral-200 rounded-sm shadow-md overflow-hidden"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             width: cardWidth,
//             height: "75%", 
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="rounded-t-sm"
//         />
//         <div className="p-[8px] text-black">
//           <div className="flex items-center gap-[4px] mb-1">
//             <StarIconSmall />
//             <p className="text-sm font-medium text-black">
//               {Math.round(rating)}
//               <span className="text-xs text-[#71717A]">/10</span>
//             </p>
//           </div>
//           <p className="text-lg line-clamp-2">{title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useRouter } from "next/navigation";
// import { StarIconSmall } from "@/_icons/StarIconSmall";

// export default function MovieCard({
//   rating,
//   title,
//   imageUrl,
//   id,
//   variant = "list", // "list" эсвэл "details"
// }) {
//   const router = useRouter();

//   // variant-аас хамаарч хэмжээ тохируулах
//   const cardWidth = variant === "details" ? "190px" : "230px";
//   const cardHeight = variant === "details" ? "280px" : "435px";

//   return (
//     <div
//       onClick={() => router.push(`/details/${id}`)}
//       className="cursor-pointer"
//     >
//       <div
//         style={{ width: cardWidth, height: cardHeight }}
//         className="bg-neutral-200 rounded-sm shadow-md overflow-hidden"
//       >
//         <div
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             width: cardWidth,
//             height: "75%",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//           className="rounded-t-sm"
//         />
//         <div className="p-[8px] text-black">
//           <div className="flex items-center gap-[4px] mb-1">
//             <StarIconSmall />
//             <p className="text-sm font-medium text-black">
//               {Math.round(rating)}
//               <span className="text-xs text-[#71717A]">/10</span>
//             </p>
//           </div>
//           <p className="text-lg line-clamp-2">{title}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
