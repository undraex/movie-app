import { StarIconSmall } from "@/_icons/StarIconSmall";

export default function MovieCard() {
  return (
    <div className="grid-cols-5">
      <div className="w-[230px] h-[340px] bg-[url('/cardPic.jpg')] bg-cover bg-center"></div>
      <div className="w-[230px] h-[95px] bg-[#F4F4F5] bg-cover bg-center">
        <div className="flex ">
          <StarIconSmall className="" />
          <div className="text-black text-sm">6.9</div>
          <div className="text-xs text-[#71717A]">/10</div>
        </div>
        <p>Dear Santa</p>
      </div>
    </div>
  );
}
