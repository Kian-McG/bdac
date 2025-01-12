"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useMediaQuery } from "@react-hook/media-query";

const Activities = () => {
  const activitiesRef = useRef(null);
  //   const { scrollYProgress, scrollY } = useScroll({
  //     target: activitiesRef,
  //     offset: ["0 0.8", "1.5 1"],
  //   });
  //   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const isLarge = useMediaQuery("(min-width: 1024px)");

  //   console.log(matches);

  const activities = [
    {
      title: "Track & Field",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium expedita accusamus odit consequuntur laboriosam molestiae",
    },
    {
      title: "Road Running",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium expedita accusamus odit consequuntur laboriosam molestiae",
    },
    {
      title: "Cross Country",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus laudantium expedita accusamus odit consequuntur laboriosam molestiae",
    },
  ];
  return (
    <section className="main bg-black text-white py-10 md:py-24">
      <motion.div
        className="container grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-8"
        ref={activitiesRef}
        // style={{ opacity: scrollYProgress }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={!isLarge ? { amount: 0.1 } : { amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <div className="font-semibold flex flex-col justify-center">
          <div>
            <div>
              <h2 className="text-4xl md:text-6xl">Activities</h2>
              <div className="bg-gradient-to-r from-red-600 to-yellow-400 w-[250px] h-1 mt-2" />
            </div>
            <p className="py-10 md:py-20 text-balance text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              laudantium expedita accusamus odit consequuntur laboriosam
              molestiae tenetur, quibusdam, sunt sint doloribus iusto nobis
              consectetur est a laboriosam molestiae tenetur, quibusdam, sunt
              sint doloribus iusto nobis consectetur est a
            </p>
            <Button className="bg-gradient-to-r from-red-600 to-yellow-400 text-lg">
              Find out more
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activities.map((activity) => {
            return (
              <motion.div
                key={activity.title}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // // viewport={{ amount: 0.2 }}
                // transition={{ duration: 1, delay: index * 0.3 }}
              >
                <Card className="bg-gradient-to-br from-red-600 to-yellow-400  rounded-lg md:p-3 border-none">
                  <CardHeader>
                    <CardTitle className="text-white text-xl md:text-2xl">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{activity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Activities;
