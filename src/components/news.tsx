"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMediaQuery } from "@react-hook/media-query";

const News = () => {
  const announcements = [
    {
      title: "CLUB TRACK DEFIBRILLATOR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis et, animi maiores autem molestiae magni error architecto repudiandae dignissimos rerum deleniti, porro commodi fuga quo. Eaque labore neque temporibus?",
    },
    {
      title: "TRACK & FIELD FIXTURES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis et, animi maiores autem molestiae magni error architecto repudiandae dignissimos rerum deleniti, porro commodi fuga quo. Eaque labore neque temporibus?",
    },
    {
      title: "CLUB MEMBERSHIP RENEWAL 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis et, animi maiores autem molestiae magni error architecto repudiandae dignissimos rerum deleniti, porro commodi fuga quo. Eaque labore neque temporibus?",
    },
  ];
  const news = [
    {
      title: "COACH OF THE YEAR",
      description:
        "SIMON MENNELL WINS “COACH OF THE YEAR” AWARD FROM ENGLAND ATHLETICS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis et, animi maiores autem molestiae magni error architecto repudiandae dignissimos rerum deleniti, porro commodi fuga quo. Eaque labore neque temporibus?",
      link: "/news/",
      image: "/sports-center.jpg",
    },
    {
      title: "COACH OF THE YEAR",
      description:
        "SIMON MENNELL WINS “COACH OF THE YEAR” AWARD FROM ENGLAND ATHLETICS",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis et, animi maiores autem molestiae magni error architecto repudiandae dignissimos rerum deleniti, porro commodi fuga quo. Eaque labore neque temporibus?",
      link: "/news/",
      image: "/sports-center.jpg",
    },
  ];
  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="main md:pb-20 bg-neutral-100">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 py-16 container"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={!isLarge ? { amount: 0.1 } : { amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl md:text-5xl font-semibold text-red-600 pb-2 md:pb-10">
            News
          </h2>
          <div className="grid grid-rows-2 md:gap-8 gap-4">
            {news.map((item, index) => {
              return (
                <Card key={index} className="grid md:grid-cols-2">
                  <div>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex">
                        <p>{item.content}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>See More!</Button>
                    </CardFooter>
                  </div>
                  <Image
                    src={item.image}
                    alt="news"
                    height={200}
                    width={200}
                    className="sm:rounded-b-md md:rounded-r-lg w-auto h-full hidden md:block object-cover"
                  />
                </Card>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl md:text-5xl font-semibold text-red-600 pb-2 md:pb-10">
            Announcements
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {announcements.map((item, index) => {
              return (
                <Card key={index} className="">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default News;
