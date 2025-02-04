import Hero1 from "@/public/Hero1.jpg";
import Hero2 from "@/public/Hero2.jpg";
import Hero3 from "@/public/Hero3.jpg";
import Hero4 from "@/public/Hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const carouselImages = [Hero1, Hero2, Hero3, Hero4];

const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="furniture photo"
                      className="w-full h-[24rem] rounded object-cover"
                      priority
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
