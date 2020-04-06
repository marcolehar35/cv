// Action Types
import {
  SELECTED_DEV_WEB_PAGE,
  SELECTED_COM_PAGE,
  SELECTED_CM_PAGE,
  SELECTED_CONTACT_PAGE,
} from 'src/actions/headerAction';

// Initial State
const initialState = {
  activCssDevWebPage: true,
  activCssCommunicationPage: false,
  activCssCMPage: false,
  activCssContactPage: false,
};

// Reducer
const demoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECTED_DEV_WEB_PAGE:
      return {
        ...state,
        activCssDevWebPage: true,
        activCssCommunicationPage: false,
        activCssCMPage: false,
        activCssContactPage: false,
      };

    case SELECTED_COM_PAGE:
      return {
        ...state,
        activCssDevWebPage: false,
        activCssCommunicationPage: true,
        activCssCMPage: false,
        activCssContactPage: false,
      };

    case SELECTED_CM_PAGE:
      return {
        ...state,
        activCssDevWebPage: false,
        activCssCommunicationPage: false,
        activCssCMPage: true,
        activCssContactPage: false,
      };

    case SELECTED_CONTACT_PAGE:
      return {
        ...state,
        activCssDevWebPage: false,
        activCssCommunicationPage: false,
        activCssCMPage: false,
        activCssContactPage: true,
      };

    default:
      return state;
  }
};

export default demoReducer;
