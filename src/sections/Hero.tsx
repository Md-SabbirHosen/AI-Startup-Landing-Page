"use client";
import starsBG from "@/assets/stars.png";
import Button from "@/components/Button";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log("scrollYProgress", value);
  // });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starsBG.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: starsBG.width,
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]" />
      {/* Start Planet */}
      <div className="absolute  size-64 md:size-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]" />
      {/* End Planets */}

      {/* Start Ring-1 */}
      <motion.div
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
        className="absolute size-[344px] md:size-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 left-1/2  bg-white rounded-full  top-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-5 left-full  border border-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="size-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring-1 */}

      {/* Start Ring-2 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] border border-dashed border-white/20  rounded-full top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2"
      />
      {/* End Ring-2 */}

      {/* Start Ring-3 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] border border-dashed border-white opacity-20  rounded-full top-1/2 left-1/2
       -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2  left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-2 left-full  bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      {/* End Ring-3 */}
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};
