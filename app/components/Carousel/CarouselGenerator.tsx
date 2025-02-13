import React from "react";
import { carouselData, carouselItem } from "./data/carouselData";
import Image from "next/image";

export default function CarouselGenerator() {
  return (
    <>
      {carouselData.map((data: carouselItem) => {
        return (
          <div key={data.id}>
            <h2>{data.imageTitle}</h2>
            <Image
              src={data.imageURL}
              alt={data.metadata}
              width={400}
              height={400}
            />
          </div>
        );
      })}
    </>
  );
}
