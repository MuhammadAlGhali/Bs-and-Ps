import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishdetailComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  postComment,
  fetchComments,
  fetchDishes,
  fetchPromos,
  fetchLeaders,
  postFeedback,
  fetchCimages,
  postOrder,
  postReservation,
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    carouselimages: state.carouselimages,
  };
};
const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  },
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) => {
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    );
  },
  postReservation: (reservename, time, date, select) => {
    dispatch(postReservation(reservename, time, date, select));
  },
  postOrder: (name, address, city, stat, zip, rememberaddr, order) => {
    dispatch(postOrder(name, address, city, stat, zip, rememberaddr, order));
  },
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  fetchLeaders: () => {
    dispatch(fetchLeaders());
  },
  fetchCimages: () => {
    dispatch(fetchCimages());
  },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchCimages();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          cimages={this.props.carouselimages.carouselimages}
          cimagesLoading={this.props.carouselimages.isLoading}
          cimagesErrMess={this.props.carouselimages.errMess}
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotions={
            this.props.promotions.promotions.filter(
              (promo) => promo.featured
            )[0]
          }
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
          leadersLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errMess}
        />
      );
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    };
    const AboutUs = () => {
      return <About leaders={this.props.leaders} />;
    };
    return (
      <div>
        <Header
          postOrder={this.props.postOrder}
          postReservation={this.props.postReservation}
        />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              />
              <Route path="/menu/:dishId" component={DishWithId} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm}
                    postFeedback={this.props.postFeedback}
                  />
                )}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
