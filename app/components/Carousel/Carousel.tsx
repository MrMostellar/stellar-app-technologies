"use client";
import { useEffect, useState } from "react";
import { carouselData } from "./data/carouselData";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function prev() {
    if (currentIndex === 0) {
      setCurrentIndex(carouselData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function next() {
    if (currentIndex === carouselData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        next();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div
      className="flex rounded-3xl min-h-[40vh] min-w-[70vw] items-center justify-center"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
    >
      <div className="flex relative max-w-[95vw]">
        <button
          onClick={() => prev()}
          className="hover:bg-[var(--primaryTransparent)] rounded-l-3xl z-10 flex left-0 absolute min-h-[100%] min-w-[5vw] items-center justify-center"
        >
          <FaChevronLeft color="var(--text)" />
        </button>
        <div className="flex overflow-hidden">
          <div className="relative items-center justify-center mx-2 min-w-[70vw] min-h-[80vh] hover:border-[var(--complimentary)] rounded-3xl hover:border-[2px]">
            <Image
              sizes="lg"
              priority={true}
              className="rounded-3xl object-cover"
              src={carouselData[currentIndex].imageURL}
              alt=""
              fill={true}
            />
          </div>
        </div>
        <button
          onClick={() => next()}
          className="hover:bg-[var(--primaryTransparent)] rounded-r-3xl z-10 flex right-0 absolute min-h-[100%] min-w-[5vw] items-center justify-center"
        >
          <FaChevronRight color="var(--text)" />
        </button>
      </div>
    </div>
  );
}
