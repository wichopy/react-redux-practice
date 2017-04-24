export default function courseReducer(state=[], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      
      console.log(action)
      console.log('in reducer')
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}