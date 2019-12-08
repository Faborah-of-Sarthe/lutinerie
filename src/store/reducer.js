/**
 * Initial State
 */
export const initialState = {
  points: [],
  bureau: '',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';

export const MERCURE_POINTS = 'MERCURE_POINTS';
export const SET_BUREAU = 'SET_BUREAU';
const UPDATE_POINTS = 'UPDATE_POINTS';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_POINTS: 
      const points = (typeof action.points == 'string') ? JSON.parse(action.points) : action.points;   
      return {
        ...state,
        points: [...points],
      };
    case SET_BUREAU: 
      return {
        ...state,
        bureau: action.bureau,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

export const updatePoints = (points) => ({
  type: UPDATE_POINTS,
  points,
});



export const mercurePoints = () => ({
  type: MERCURE_POINTS,
});

export const setBureau = (bureau) => ({
  type: SET_BUREAU,
  bureau,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
