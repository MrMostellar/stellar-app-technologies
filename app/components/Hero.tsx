import React from "react";
import AnimationOnScroll from "./AnimationOnScroll";

export default function Hero() {
  return (
    <>
      <div className="p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-1 row-span-2 md:col-start-1 md:col-span-6 md:row-start-1 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <AnimationOnScroll
          classNameInView="in-view"
          classNameNotInView="not-in-view"
        >
          <h1 className="titleText p-4 text-lg">Custom Websites</h1>
          <p className="paragraphText">
            Pellentesque est ipsum, pretium eu lectus sit amet, malesuada
            finibus odio. Suspendisse placerat nunc tellus, id dapibus dui
            tempus ut.
          </p>
        </AnimationOnScroll>
      </div>
      <div className="p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-3 row-span-2 md:col-start-5 md:row-start-4 md:col-span-6 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <AnimationOnScroll
          classNameInView="in-view"
          classNameNotInView="not-in-view"
        >
          <h1 className="titleText p-4 text-lg">Custom Apps</h1>
          <p className="paragraphText">
            Mauris placerat massa velit, non convallis mi sodales nec. In hac
            habitasse platea dictumst. Suspendisse sed massa egestas, porta
            lorem sit amet, molestie felis.
          </p>
        </AnimationOnScroll>
      </div>
      <div className="p-1 sm:p-4 flex flex-col col-start-1 col-span-12 row-start-5 row-span-2 md:col-start-1 md:row-start-7 md:col-span-6 md:row-span-3 justify-center items-center rounded-3xl m-1 sm:m-4">
        <AnimationOnScroll
          classNameInView="in-view"
          classNameNotInView="not-in-view"
        >
          <h1 className="titleText p-4 text-lg">Development Services</h1>
          <p className="paragraphText">
            Phasellus vel tortor ornare sem euismod bibendum vel vel lacus.
            Integer non nisi sagittis, sagittis risus condimentum, cursus
            lectus.
          </p>
        </AnimationOnScroll>
      </div>
    </>
  );
}
