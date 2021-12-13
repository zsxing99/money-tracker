import moment from "moment";

export const step = (pageName, interactionType, actionType, action) => ({
    type: "STEP",
    data: {
        pageName,
        interactionType,
        actionType,
        action,
        timestamp: moment().format()
    }
});