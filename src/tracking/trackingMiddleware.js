import moment from "moment";

const trackingMiddleware = tracker => () => next => action => {
    // Expermentaly we will add from property to differecie the event tracked from redux!
    const actionWithOrigin = Object.assign({}, action, {
        from: 'REDUX',
        timestamp: moment().format()
    });

    tracker.trackEvent(actionWithOrigin);

    next(action);
}

export default trackingMiddleware;