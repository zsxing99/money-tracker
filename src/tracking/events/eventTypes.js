import moment from "moment";

export const step = (interactionType, actionType, action, reduxAction, timestamp = moment().format()) => ({
    type: "STEP",
    data: {
        interactionType,
        actionType,
        action,
        reduxAction,
        timestamp
    }
});