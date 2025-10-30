

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
    <div className="relative h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/HeroSectionPic1.jpg')" }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Carousel container */}
      <div className="relative w-full max-w-[1440px]">
        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                title: "Wicked",
                rating: "6.9",
                description:
                  "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads.",
                image: "/HeroSectionPic1.jpg",
              },
              {
                title: "Inside Out 2",
                rating: "8.1",
                description:
                  "Riley navigates new emotions as she enters her teenage years, bringing chaos and heartwarming moments to her mind’s headquarters.",
                image: "/HeroSectionPic2.jpg",
              },
              {
                title: "Dune: Part Two",
                rating: "8.7",
                description:
                  "Paul Atreides unites with the Fremen and embarks on a spiritual and martial journey to avenge his family and bring peace to Arrakis.",
                image: "/HeroSectionPic3.jpg",
              },
            ].map((movie, index) => (
              <CarouselItem key={index}>
                <div
                  className="h-[600px] bg-cover bg-center bg-no-repeat flex items-center px-[140px]"
                  style={{ backgroundImage: `url(${movie.image})` }}
                >
                  <div className="max-w-[400px] z-10">
                    <p className="text-base font-inter text-white mb-2">
                      Now playing:
                    </p>
                    <p className="text-4xl font-inter text-white font-bold mb-2">
                      {movie.title}
                    </p>

                    <div className="flex items-center mb-3">
                      <StarIcon />
                      <div className="text-white text-lg font-inter ml-1">
                        {movie.rating}
                      </div>
                      <div className="text-base font-inter text-[#71717A] ml-1">
                        /10
                      </div>
                    </div>

                    <p className="text-xs text-white font-inter h-[80px] w-[308px] mb-4">
                      {movie.description}
                    </p>

                    <button className="flex h-[40px] w-[145px] items-center justify-center border bg-[#F4F4F5] rounded-md gap-[8px]">
                      <PlayIcon />
                      Watch trailer
                    </button>
                  </div>
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


