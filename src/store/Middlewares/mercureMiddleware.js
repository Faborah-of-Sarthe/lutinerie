import { MERCURE_POINTS, updatePoints } from 'src/store/reducer';

const mercureMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case MERCURE_POINTS: 
            
            const url = new URL(process.env.REACT_APP_MERCURE_HUB);
            url.searchParams.append('topic', process.env.REACT_APP_MERCURE_TOPIC_URL);
            const eventSource = new EventSource(url);
            
            eventSource.onmessage = (e) => {
                store.dispatch(updatePoints(e.data));
            };
            
        break;

        default:
            next(action);
    }
  };

export default mercureMiddleware;