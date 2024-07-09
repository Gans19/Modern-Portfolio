import { ThreeDCardDemo } from "@/components/3dcard";
import { AnimatedPinDemo } from "@/components/3dpin";
import { CardHoverEffectDemo } from "@/components/card-hover";
import { CanvasRevealEffectDemo } from "@/components/reveal";
import { AnimatedTooltipPreview } from "@/components/tooltip";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className=" mt-7  justify-center items-center w-full">
<h1 className="text-2xl  font-bold my-3 justify-center items-center text-center w-[100%]">3D Cards</h1>
      <ThreeDCardDemo />
   </div>
   {/* <div className=" mt-7  justify-center items-center w-full">
<h1 className="text-2xl  font-bold my-3 justify-center items-center text-center w-[100%]">Animated Tooltip</h1>
      <AnimatedTooltipPreview />
   </div> */}
   <div className=" mt-7  justify-center items-center w-full">
<h1 className="text-2xl  font-bold my-3 justify-center items-center text-center w-[100%]">Animated Reveal</h1>
      <CanvasRevealEffectDemo />
   </div>
   {/* <div className=" mt-7  justify-center items-center w-full">
<h1 className="text-2xl  font-bold my-3 justify-center items-center text-center w-[100%]">Animated Reveal</h1>
      <CardHoverEffectDemo />
   </div> */}
   {/* <div className=" mt-7  justify-center items-center w-full bg-red-400">
<h1 className="text-2xl  font-bold my-3 justify-center items-center text-center w-[100%]">3D Pin Link</h1>
<div className=" w-[500px] h-[500px]">

      <AnimatedPinDemo />
</div>
   </div> */}
   </>

     
      
  );
}
