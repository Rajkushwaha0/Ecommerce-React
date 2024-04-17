import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: "https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg",
    altText: "Grab Your Favourite",
    caption: "50% Sale",
    key: 1,
  },
  {
    src: "https://manipaldigital.info/wp-content/uploads/2021/06/image-optimization-for-ecommerce-use-banner.jpg",
    altText: "Looks like you want something",
    caption: "Just add to your cart",
    key: 2,
  },
  {
    src: "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg",
    altText: "Wait for something exciting",
    caption: "Getting something good for you",
    key: 3,
  },
];

function Slider(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-carousel-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption
          className="carousel-text"
          captionText={item.caption}
          captionHeader={item.altText}
        /> */}
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-carousel-tag img {
              width: 100%;
              height: 650px;  
            }`}
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}

export default Slider;
