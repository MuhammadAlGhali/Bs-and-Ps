import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Carouselimages } from "./carouselimages";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback, InitialOrder, InitialReservation } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions,
      carouselimages: Carouselimages,
      ...createForms({
        feedback: InitialFeedback,
        order: InitialOrder,
        reservation: InitialReservation,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
