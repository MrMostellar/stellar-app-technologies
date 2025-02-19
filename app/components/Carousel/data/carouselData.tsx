export interface carouselItem {
  id: number;
  imageTitle: string;
  imageURL: string;
  siteURL: string;
  metadata: string;
  carouselstyle: string;
}

const style = "absolute min-w-[67vw] min-h-[70vh]";

export const carouselData: carouselItem[] = [
  {
    id: 0,
    imageTitle: "Image 1",
    imageURL: "/images/bgSpace2.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 1,
    imageTitle: "Image 2",
    imageURL: "/images/bgSpace3.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 2,
    imageTitle: "Image 3",
    imageURL: "/images/bgSpace4.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 3,
    imageTitle: "Image 4",
    imageURL: "/images/bgSpace5.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 4,
    imageTitle: "Image 5",
    imageURL: "/images/bgSpace6.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
  {
    id: 5,
    imageTitle: "Image 6",
    imageURL: "/images/bgSpace7.jpg",
    siteURL: "",
    metadata: "image",
    carouselstyle: style,
  },
];
