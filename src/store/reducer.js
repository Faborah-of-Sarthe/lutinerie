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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
