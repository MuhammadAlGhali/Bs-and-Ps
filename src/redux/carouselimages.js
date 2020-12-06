import * as ActionTypes from "./ActionTypes";
export const Carouselimages = (
  state = { isLoading: true, errMess: null, carouselimages: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CIMAGES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        carouselimages: action.payload,
      };
    case ActionTypes.CIMAGES_LOADING:
      return { ...state, isLoading: true, errMess: null, carouselimages: [] };
    case ActionTypes.CIMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        carouselimages: [],
      };
    default:
      return state;
  }
};
