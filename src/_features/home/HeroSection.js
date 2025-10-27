// import { PlayIcon } from "@/_icons/PlayIcon";
// import { StarIcon } from "@/_icons/StarIcon";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function HeroSection() {
//   return (
//     <div
//       className="h-[600px] bg-cover bg-center bg-no-repeat align-center"
//       style={{ backgroundImage: "url('/HeroSectionPic1.jpg')" }}
//     >
//       <div className="pt-[178px] pr-[896px] pb-[398px] pl-[140px]">
//         <p className="text-base font-inter text-white">Now playing:</p>
//         <p className="text-4xl font-inter text-white font-bold">Wicked</p>
//         <div className="flex items-center">
//           <StarIcon />
//           <div className="text-white text-lg font-inter">6.9</div>
//           <div className="text-base font-inter text-[#71717A]">/10</div>
//         </div>
//         <p className="text-xs text-white font-inter h-[80px] w-[308px] margin">
//           Elphaba, a misunderstood young woman because of her green skin, and
//           Glinda, a popular girl, become friends at Shiz University in the Land
//           of Oz. After an encounter with the Wonderful Wizard of Oz, their
//           friendship reaches a crossroads.
//         </p>
//         <div>
//           <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px] ">
//             <PlayIcon />
//             Watch trailer
//           </button>
//         </div>
//       </div>
//     </div>
// <Carousel className="w-full max-w-xs">
//   <CarouselContent>
//     {Array.from({ length: 5 }).map((_, index) => (
//       <CarouselItem key={index}>
//         <div className="p-1">
//           <Card>
//             <CardContent className="flex aspect-square items-center justify-center p-6">
//               <span className="text-4xl font-semibold">{index + 1}</span>
//             </CardContent>
//           </Card>
//         </div>
//       </CarouselItem>
//     ))}
//   </CarouselContent>
//   <CarouselPrevious />
//   <CarouselNext />
// </Carousel>
//   );
// }

// import { PlayIcon } from "@/_icons/PlayIcon";
// import { StarIcon } from "@/_icons/StarIcon";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export default function HeroSection() {
//   return (
//     <div className="relative h-[600px] overflow-hidden">
//       {/* 🎠 Carousel Background */}
//       <Carousel className="absolute inset-0 w-full h-full">
//         <CarouselContent>
//           {Array.from({ length: 5 }).map((_, index) => (
//             <CarouselItem key={index}>
//               <div className="p-1 h-full">
//                 <Card
//                   className="h-full bg-cover bg-center bg-no-repeat"
//                   style={{
//                     backgroundImage: `url('/HeroSectionPic${index + 1}.jpg')`,
//                   }}
//                 >
//                   <CardContent className="flex items-center justify-center h-full bg-black/40">
//                     <span className="text-4xl font-semibold text-white">
//                       {index + 1}
//                     </span>
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="text-white" />
//         <CarouselNext className="text-white" />
//       </Carousel>

//       {/* 🎞 Hero Text Content (overlay) */}
//       <div className="relative z-10 pt-[178px] pr-[896px] pb-[398px] pl-[140px] text-white">
//         <p className="text-base font-inter">Now playing:</p>
//         <p className="text-4xl font-inter font-bold">Wicked</p>

//         <div className="flex items-center gap-1 mt-2">
//           <StarIcon />
//           <div className="text-lg font-inter">6.9</div>
//           <div className="text-base font-inter text-[#D1D1D6]">/10</div>
//         </div>

//         <p className="text-xs font-inter h-[80px] w-[308px] mt-3 mb-4">
//           Elphaba, a misunderstood young woman because of her green skin, and
//           Glinda, a popular girl, become friends at Shiz University in the Land
//           of Oz. After an encounter with the Wonderful Wizard of Oz, their
//           friendship reaches a crossroads.
//         </p>

//         <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] text-black rounded-md gap-[8px]">
//           <PlayIcon />
//           Watch trailer
//         </button>
//       </div>

//       {/* Gradient overlay for better readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
//     </div>
//   );
// }

import { PlayIcon } from "@/_icons/PlayIcon";
import { StarIcon } from "@/_icons/StarIcon";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSection() {
  return (
    <div>
      {/* Hero Background Section */}
      <div
        className="h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/HeroSectionPic1.jpg')" }}
      >
        <div className="pl-[140px] pr-[896px]">
          <p className="text-base font-inter text-white mb-2">Now playing:</p>
          <p className="text-4xl font-inter text-white font-bold mb-2">
            Wicked
          </p>
          <div className="flex items-center mb-3">
            <StarIcon />
            <div className="text-white text-lg font-inter ml-1">6.9</div>
            <div className="text-base font-inter text-[#71717A] ml-1">/10</div>
          </div>
          <p className="text-xs text-white font-inter h-[80px] w-[308px] mb-4">
            Elphaba, a misunderstood young woman because of her green skin, and
            Glinda, a popular girl, become friends at Shiz University in the
            Land of Oz. After an encounter with the Wonderful Wizard of Oz,
            their friendship reaches a crossroads.
          </p>
          <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px]">
            <PlayIcon />
            Watch trailer
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center py-10">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
