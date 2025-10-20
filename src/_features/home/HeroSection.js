import { PlayIcon } from "@/_icons/PlayIcon";
import { StarIcon } from "@/_icons/StarIcon";

export default function HeroSection() {
  return (
    <div
      className="h-[600px] bg-cover bg-center bg-no-repeat align-center "
      style={{ backgroundImage: "url('/HeroSectionPic1.jpg')" }}
    >
      <div className="pt-[178px] pr-[896px] pb-[398px] pl-[140px]">
        <p className="text-base font-inter text-white">Now playing:</p>
        <p className="text-4xl font-inter text-white font-bold">Wicked</p>
        <div className="flex ">
          <StarIcon />
          <div className="text-white text-lg font-inter">6.9</div>
          <div className="text-base font-inter text-[#71717A]">/10</div>
        </div>
        <p className="text-xs text-white font-inter h-[80px] w-[308px] margin">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <div>
          <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px] ">
            <PlayIcon />
            Watch trailer
          </button>
        </div>
      </div>
    </div>
  );
}
