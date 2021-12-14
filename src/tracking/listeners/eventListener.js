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
    // FUNCTIONS NOT IMPLEMENTED
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
	'CHANGE_CURRENCY',
	'CHANGE_LINKED_ACCOUNT',
	'CHANGE_LINKED_AMOUNT',
	'CHANGE_LINKED_CURRENCY',
	'CHANGE_FILTER_DATE',
	'TOGGLE_FILTER_CALENDAR',
	'CHANGE_FILTER_PAGE',
	'TOGGLE_FILTER_MODAL',
	'APPLY_FILTERS',

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

    // INFORMATION
    'UPDATE_EXCHANGE_RATE_SUCCESS',
    'UPDATE_EXCHANGE_RATE_FAILURE',
    'SAVE_ACCOUNT_SUCCESS',
    'SAVE_ACCOUNT_FAILURE',
    'REMOVE_ACCOUNT_SUCCESS',
    'REMOVE_ACCOUNT_FAILURE',
    'SAVE_TRANSACTION_SUCCESS',
    'REMOVE_TRANSACTION_SUCCESS',
    'SHOW_ERROR',
    'UPDATE_ACCOUNT',
    'REMOVE_ACCOUNT_REQUEST',
    'REMOVE_ACCOUNT_START',
    'REMOVE_ACCOUNT_ITEM_PROCESSED',
];