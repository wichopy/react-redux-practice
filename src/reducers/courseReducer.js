import * as types from '../actions/actionTypes';

export default function courseReducer(state=[], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      
      console.log(action)
      console.log('in reducer')
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}