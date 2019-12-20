import { MERCURE_POINTS, updatePoint } from 'src/store/reducer';
import {toastr} from 'react-redux-toastr'

const mercureMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case MERCURE_POINTS:

            const url = new URL(process.env.REACT_APP_MERCURE_HUB);

            url.searchParams.append('topic', process.env.REACT_APP_MERCURE_TOPIC_URL, { withCredentials: true });
            const eventSource = new EventSource(url);

            eventSource.onmessage = (e) => {
                const point = (typeof e.data == 'string') ? JSON.parse(e.data) : e.data;
                store.dispatch(updatePoint(point.slug));
                toastr.success('Point déverrouillé !', `Le point ${point.label} a été déverrouillé !`);
            };

        break;

        default:
            next(action);
    }
  };

export default mercureMiddleware;
