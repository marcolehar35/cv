// Action Types
import {
  CHANGE_TOOLTIP_HOBBY,
  CHANGE_COUNT,
} from 'src/actions/topPageAction';

// Initial State
const initialState = {
  hobby: '',
  count: 0,
};

// Reducer
const topPageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TOOLTIP_HOBBY:
      return {
        ...state,
        hobby: action.hobbyOrdered,
      };

    case CHANGE_COUNT:
      return {
        ...state,
        count: action.setcount,
      };


    default:
      return state;
  }
};

export default topPageReducer;
