"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingHeroList(){
    return(   
    <div className="w-[1440px] h-[600px] flex flex-col space-y-3">
      <Skeleton className="w-full h-[600px] rounded-md bg-[#E4E4E7]" />
      <div className="space-y-2 px-1">
        <Skeleton className="h-4 w-[180px] bg-[#E4E4E7]" />
        <Skeleton className="h-4 w-[100px] bg-[#E4E4E7]" />
      </div>
    </div>
  );
}     