"use client";
import React, {  } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useCarousel } from "@/lib/hooks/useCarousel";
import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const AboutUs = () => {
  const isLarge = useMediaQuery("(min-width: 1024px)");

  const currentImage = useCarousel({ numberOfItems: 3, interval: 5000 });
  return (
    <section className="main py-10 md:py-24">
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 container gap-10"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={!isLarge ? { amount: 0.2 } : { amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col justify-center rounded-l-lg font-semibold">
          <h2 className=" text-4xl md:text-6xl font-semibold text-red-600 pb-10">
            Welcome to Braintree & District Athletic Club
          </h2>
          <p className="pb-10">
            Braintree & District Athletic Club provides a wide range of
            Athletics Training and Competition for both new and experienced
            athletes in the Braintree Area. This includes track, field (jumping
            and throwing), multi event, road running, trail running and cross
            country.
            <br />
            <br /> The club has seen remarkable growth in the last few years,
            more than doubling in size, with growth seen particularly in the
            junior sections, endurance, and road running. We compete and train
            throughout the year with training nights on Tuesdays and Thursdays
            at Braintree Track
          </p>
          <Button className="w-1/3">Find out more</Button>
        </div>
        <div className="h-full relative overflow-hidden rounded-lg">
          {["/b&dac-cover.jpeg", "/sports-center.jpg", "/startline.jpg"].map(
            (image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  alt="hero"
                  height={500}
                  width={500}
                  priority={index === currentImage}
                  className={` transition-opacity duration-500 opacity-0 h-[300px] md:h-full w-auto object-center object-cover ${
                    index === currentImage ? "opacity-100" : "hidden"
                  }`}
                />
              );
            }
          )}
        </div>
      </motion.section>
    </section>
  );
};

export default AboutUs;
