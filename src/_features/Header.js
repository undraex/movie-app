import { FilmIcon } from "@/_icons/FilmIcon";
import { SearchIcon } from "@/_icons/SearchIcon";
import { ModeIcon } from "@/_icons/ModeIcon";
import { HeaderGenre } from "./home/HeaderGenre";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  const handleNavigateHome =()=>{
    router.push("/")
  }
  return (
    <div className="flex w-[1440px] justify-between items-center">
      <div className="flex h-[59px] items-center cursor-pointer" onClick={handleNavigateHome}>
        <FilmIcon/>
      </div>
      <div className="flex gap-[12px] ">
        <HeaderGenre />
        <div className="relative w-[379px] h-[36px]">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon className="w-4 h-4" />
          </div>

          <input
            type="text"
            className="border oklch(92.8% 0.006 264.531) rounded-lg outline-none w-full h-full pl-10 pr-12 "
            placeholder="Search.."
          />
        </div>
      </div>
      <ModeIcon />
    </div>
  );
}
