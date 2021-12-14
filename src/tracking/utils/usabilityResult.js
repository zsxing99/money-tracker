import { v4 as uuidv4 } from 'uuid';
import { getTask } from './usabilityTasks';

const TASK_COUNT = 6;

export function sendResult() {
    let payload = {};
    const taskGroup = localStorage.getItem('taskGroup');
    payload.id = uuidv4();
    payload.demographics = JSON.parse(localStorage.getItem('demographics'));
    payload.demographics.comment = localStorage.getItem('comment');
    payload.demographics.group = taskGroup;

    payload.survey = JSON.parse(localStorage.getItem(`surveyResults`));
    // payload.totalWaitTime = parseInt(localStorage.getItem('total_wait_time'));
    // payload.numberOfWaits = parseInt(localStorage.getItem('number_of_waits'));

    const tasks = [];
    for (let i = 0; i < TASK_COUNT; i++) {
        let task = {};

        task.id = getTask(taskGroup, i + 1).id;
        task.events = JSON.parse(localStorage.getItem(`task${i + 1}_events`));
        // task.alerts = parseInt(localStorage.getItem(`task${i + 1}_alerts`));

        tasks.push(task);
    }

    payload.tasks = tasks;

    console.log(payload);

    // TODO: send payload to aws
}
