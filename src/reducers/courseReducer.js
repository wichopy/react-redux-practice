import * as types from '../actions/actionTypes';

export default function courseReducer(state=[], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      
      console.log(action)
      console.log('in reducer')
      return [...state,
        Object.assign({}, action.courses)
      ];

    default:
      return state;
  }
}