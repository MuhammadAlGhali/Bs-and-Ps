import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  CarouselIndicators,
} from "reactstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import "../App.css";
import { FadeTransform, Fade } from "react-animation-components";
import { Link } from "react-router-dom";
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <CardImg
          src={baseUrl + item.image}
          width="300"
          height="200"
          alt={item.name}
        />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
}
function RenderCarousel({ items, isLoading, errMess }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
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
          className="m-auto"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img
            className="img img-responsive"
            width="100%"
            height="400"
            src={baseUrl + item.src}
            alt={item.altText}
          />
          <Link to="/menu">
            <CarouselCaption
              className="text-warning"
              captionHeader={item.header}
            />
          </Link>
        </CarouselItem>
      );
    });
    return (
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-content-center">
        <div className="col-12">
          <RenderCarousel
            items={props.cimages}
            isLoading={props.cimagesLoading}
            errMess={props.cimagesErrMess}
          />
        </div>
      </div>

      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.dishesLoading}
              errMess={props.dishesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotions}
              isLoading={props.promosLoading}
              errMess={props.promosErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.leader}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
          </div>
        </div>
      </FadeTransform>
    </div>
  );
}

export default Home;
