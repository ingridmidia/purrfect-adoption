import { useState, useEffect } from "react";
import banner from "../assets/banner.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Quiz from "./Quiz";

export default function Home() {
  const [catImage, setCatImage] = useState(banner);
  const images = [one, two, three, four, five, six];

  const fetchCatImage = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatImage(data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <>
      <div className="bg-violet-50 flex flex-col lg:flex-row items-center relative">
        <div className="relative lg:w-[35%] flex items-center justify-center">
          <img src={catImage} alt="banner" className="object-contain h-80" />
          <Button
            className="absolute inset-0 top-[92%] lg:top-[85%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-violet-300 rounded-full hover:bg-violet-100 text-lg md:text-xl xl:text-2xl"
            onClick={fetchCatImage}
          >
            See a New Cat
          </Button>
        </div>
        <div className="flex flex-col p-4 items-center lg:w-[65%]">
          <h1 className="text-violet-800 mb-8 text-lg md:text-xl lg:text-6xl font-bold">
            Thinking about adopting a cat?
          </h1>
          <Quiz />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center lg:p-6">
        <div className="border border-2 border-violet-800 rounded-xl m-4">
          <h2 className="p-6 leading-relaxed text-lg md:text-2xl">
            Welcome to Purrfect Adoption, the best guide on cat adoption.
            Whether you're a first-time cat parent or looking to add another
            furry friend to your family, we're here to help you navigate the
            journey. Discover expert advice, practical tips, and heartwarming
            stories that will make your adoption experience as smooth and
            rewarding as possible.
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <Carousel className="w-full max-w-xs mx-4 lg:mx-12">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
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
    </>
  );
}
 