export const onAction = (event = {}, eventsHistory) => {
    let newEvent;
    try {
        JSON.stringify(event, null, 2)
        newEvent = event;
    } catch (error) {
        newEvent = {
            type: event.type ? event.type : null
        };
    }

    if (newEvent.type !== null && !excludeEventTypes.includes(newEvent.type)) {
        console.log("logging event: \n" + JSON.stringify(newEvent, null, 2));
        let events = JSON.parse(localStorage.getItem('events'));
        if (events === null) {
            events = [];
        }
        events.push(newEvent);
        localStorage.setItem('events', JSON.stringify(events));
    }

    return event;
}

const excludeEventTypes = [
    // NO FUNCTION
    'DISMISS_SYNC_WARNING',
    'SET_PENDING_CHANGES_FLAG',
    'SYNC',
    'SYNC_REQUEST',
    'SYNC_SUCCESS',
    'SYNC_FAILURE',
    'SAVE_EXPORT_FILE',
    'OPEN_IMPORT_FILE',
    'DISCARD_IMPORT_FILE',
    'START_DATA_IMPORT',
    'IMPORT_FILE_READ_SUCCESS',
    'IMPORT_LINE_PROCESSED',
    'IMPORT_FAILURE',

    // LOADING
    'BOOTSTRAP',
    'LOAD_SETTINGS_SUCCESS',
    'LOAD_ACCOUNTS',
    'LOAD_ACCOUNTS_SUCCESS',
    'LOAD_TAGS',
    'LOAD_EXPENSE_TAGS_SUCCESS',
    'LOAD_INCOME_TAGS_SUCCESS',
    'LOAD_FILTER_TRANSACTIONS',
    'LOAD_FILTER_TRANSACTIONS_SUCCESS',
    'LOAD_RECENT_TRANSACTIONS',
    'LOAD_RECENT_TRANSACTIONS_SUCCESS',
    'LOAD_REPORT',
    'LOAD_REPORT_SUCCESS',
    'LOAD_REPORT_FAILURE',
    'RESET_ACCOUNT_FORM',
    'RESET_TRANSACTION_FORM',
    'FILL_IN_ACCOUNT_FORM',
    'FILL_IN_TRANSACTION_FORM',
];