"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="main grid grid-cols-1 md:grid-cols-2 h-[95vh] gap-10 bg-neutral-100">
      <div>
        <video
          autoPlay
          loop
          muted
          className=" w-full aspect-video object-cover h-full"
          playsInline
        >
          <source src={"/hurdles.mp4"} type="video/mp4" />
        </video>
        <div className="bg-gradien-to-tr from-red-600/50 from-[40%] to-yellow-400/50 to-95% h-full w-1/2 absolute top-0 left-0"></div>
      </div>
      <div>
        <div className="flex flex-col justify-center h-full w-full container">
          <motion.h1
            className=" text-5xl md:text-8xl text-yellow-400 font-bold tracking-tighter pb-10"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Braintree & District <br /> <span className="underline decoration-red-600 underline-offset-8">Athletic Club</span>
          </motion.h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            earum itaque expedita fugit, id nisi laboriosam ut dolorem hic dicta
            autem, repellat voluptas eos sint! Nostrum saepe officia iure
            architecto?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
