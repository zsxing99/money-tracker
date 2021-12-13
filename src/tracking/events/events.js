import { step } from './eventTypes';
import Interactions from './interactions';
import Actions from './actions';

/**
 * TASK DESCRIPTION BUTTON
 */
 export const taskDescriptionButtonClick = () => {
    return step(
        null,
        Interactions.CLICK,
        Actions.TASK_DESCRIPTION,
        "User clicked on task description button."
    )
}