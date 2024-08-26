import banner from "../assets/banner.jpg";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  const images = [one, two, three, four, five, six];

  return (
    <>
      <div className="bg-violet-100 flex flex-col md:flex-row items-center">
        <img src={banner} alt="banner" className="md:w-[30%]" />
        <h1 className="text-center text-violet-800 m-1 text-lg md:text-3xl lg:text-6xl font-bold">
          Unlock the Secrets to a Successful Cat Adoption!
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
        <div className="border border-2 border-violet-800 rounded-xl m-4">
          <h2 className="p-6 leading-relaxed text-lg md:text-2xl">
            Welcome to Puurdect Adoption, the best guide on cat adoption.
            Whether you're a first-time cat parent or looking to add another
            furry friend to your family, we're here to help you navigate the
            journey. Discover expert advice, practical tips, and heartwarming
            stories that will make your adoption experience as smooth and
            rewarding as possible.
          </h2>
          <Link to="/adoption-guide" className="flex justify-center p-4">
            <Button className="bg-violet-300 hover:bg-violet-100 rounded-full text-lg md:text-2xl">
              View Our Adoption Guide
            </Button>
          </Link>
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

export default Home;
