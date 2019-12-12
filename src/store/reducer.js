import  Cookies from 'universal-cookie';
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
const UPDATE_POINT = 'UPDATE_POINT';
export const BUREAU_1 = 'sarthe';
export const BUREAU_2 = 'savoie';

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
    case UPDATE_POINT: 
      const slug =  action.slug;   
      let newPoints = state.points.map(point => {
        
        if(point.slug == slug) {
          point.repaired = "1";
        }
        return point;

      })
      
      return {
        ...state,
        points: [...newPoints],
      };
      
    case SET_BUREAU: 
      let cookie = new Cookies;
      let d = new Date().getTime() + (60 * 60 * 24 * 1000)
      d = new Date(d);
      cookie.set('bureau', action.bureau,{path: '/', expires: d});
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

export const updatePoint = (slug) => ({
  type: UPDATE_POINT,
  slug,
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

 export const getPoint = (state, slug) => state.points.find(point => point.slug == slug);

/**
 * Export
 */
export default reducer;
