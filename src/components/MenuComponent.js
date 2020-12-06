import React from "react";
import { Col, Breadcrumb, BreadcrumbItem, Media } from "reactstrap";
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
        <Media tag="li" className="row">
          <Col md="6">
            <Media middle>
              <Media
                object
                src={baseUrl + dish.image}
                className="img-fluid"
                width="400"
                height="400"
                alt={dish.name}
              />
            </Media>
          </Col>
          <Col md="6">
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <h2>{dish.price}</h2>
              <p>{dish.description}</p>
            </Media>
          </Col>
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
              <Media list className="p-0">
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
