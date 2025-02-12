export interface carouselItem {
  id: number;
  imageTitle: string;
  imageURL: string;
  metadata: string;
  carouselstyle: string;
}

const style = "";

export const carouselData: carouselItem[] = [
  {
    id: 0,
    imageTitle: "Image 1",
    imageURL: "/images/bgSpace2.jpg",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 1,
    imageTitle: "Image 2",
    imageURL: "/images/bgSpace3.jpg",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 2,
    imageTitle: "Image 3",
    imageURL: "/images/bgSpace4.jpg",
    metadata: "image",
    carouselstyle: style,
  },
];
