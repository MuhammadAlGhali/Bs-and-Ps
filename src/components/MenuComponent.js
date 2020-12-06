import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import "../App.css";
import { FadeTransform, Fade, Stagger } from "react-animation-components";
function RenderMenuItem({ dish, onClick }) {
  return (
    <FadeTransform
      in
      transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
    >
      <Link to={`/menu/${dish.id}`} className="mediatext">
        <Media tag="li" className="m-5">
          <Media left middle>
            <Media
              object
              src={baseUrl + dish.image}
              width="200"
              height="200"
              alt={dish.name}
            />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <h2>{dish.price}</h2>
            <p>{dish.description}</p>
          </Media>
        </Media>
      </Link>
    </FadeTransform>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return <RenderMenuItem dish={dish} />;
  });
  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 menucard">
            <Stagger in>
              <Media list>
                <Fade in>
                  {menu}
                  <br />
                </Fade>
              </Media>
            </Stagger>
          </div>
        </div>
      </div>
    );
};

export default Menu;
