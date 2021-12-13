/**
 * Enum for types of action related to an interaction
 */
 const Actions = Object.freeze({
    NONE:               "none",
    SUBMIT:             "submit",
    CANCEL:             "cancel",
    NAVIGATION:         "navigation",
    BACK:               "back",  // gestures + browser back + app back
    TASK_DESCRIPTION:   "task-description",
    HELP:               "help"
});

export default Actions;