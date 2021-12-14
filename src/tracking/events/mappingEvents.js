import { step } from './eventTypes';
import Interactions from './interactions';
import Actions from './actions';

/**
 * NAVIGATION
 */
const navigationTo = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NAVIGATION,
        'User elected to navigate to other page.',
        'TOGGLE_SIDEBAR',
        timestamp
    );
};

/**
 * COLLAPSE
 */
const collapseClick = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to collapse the toggle view.',
        'TOGGLE_SECTION_COLLAPSE',
        timestamp
    );
};

/**
 * SETTINGS
 */
const changeSettingsCurrency = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their settings currency.',
        'CHANGE_SETTINGS_CURRENCY',
        timestamp
    );
};

const updateExchangeRate = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to update their exchange rate.',
        'UPDATE_EXCHANGE_RATE',
        timestamp
    );
};

const completeSetup = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.SUBMIT,
        'User elected to complete their setup.',
        'COMPLETE_SETUP',
        timestamp
    );
};

/**
 * ACCOUNTS
 */
const saveAccount = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.SUBMIT,
        'User elected to save their account.',
        'SAVE_ACCOUNT',
        timestamp
    );
};

const removeAccount = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.SUBMIT,
        'User elected to remove their account.',
        'REMOVE_ACCOUNT',
        timestamp
    );
};

/**
 * TRANSACTIONS
 */
const saveTransaction = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.SUBMIT,
        'User elected to save their transaction.',
        'SAVE_TRANSACTION',
        timestamp
    );
};

const removeTransaction = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.SUBMIT,
        'User elected to remove their transaction.',
        'REMOVE_TRANSACTION',
        timestamp
    );
};

/**
 * REPORT
 */
const changeReportKind = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their report kind.',
        'CHANGE_REPORT_KIND',
        timestamp
    );
};

const changeReportTimeSpan = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their report time span.',
        'CHANGE_REPORT_TIMESPAN',
        timestamp
    );
};

const changeReportAccounts = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their report accounts.',
        'CHANGE_REPORT_ACCOUNTS',
        timestamp
    );
};

const changeReportExcludedTags = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their report excluded tags.',
        'CHANGE_REPORT_EXCLUDED_TAGS',
        timestamp
    );
};

const moveReportDateBackwards = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to move their report date backwards.',
        'MOVE_REPORT_DATE_BACKWARDS',
        timestamp
    );
};

const moveReportDateForwards = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to move their report date forwards.',
        'MOVE_REPORT_DATE_FORWARDS',
        timestamp
    );
};

/**
 * ACCOUNT
 */
const openAccountInModal = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to open their account in modal.',
        'OPEN_ACCOUNT_IN_MODAL',
        timestamp
    );
};

const changeAccountName = (timestamp) => {
    return step(
        Interactions.WRITE,
        Actions.NONE,
        'User elected to change their account name.',
        'CHANGE_NAME',
        timestamp
    );
};

const changeAccountGroup = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their account group.',
        'CHANGE_GROUP',
        timestamp
    );
};

const changeAccountBalance = (timestamp) => {
    return step(
        Interactions.WRITE,
        Actions.NONE,
        'User elected to change their account balance.',
        'CHANGE_BALANCE',
        timestamp
    );
};

const changeAccountCurrency = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their account currency.',
        'TOGGLE_CURRENCY',
        timestamp
    );
};

const changeShowDashboardSetting = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their setting for showing dashboard.',
        'TOGGLE_ON_DASHBOARD',
        timestamp
    );
};

/**
 * TRANSACTION
 */
const openTransactionInModal = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to open their transaction in modal.',
        'OPEN_TRANSACTION_IN_MODAL',
        timestamp
    );
};

const changeTransactionKind = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their transaction kind.',
        'CHANGE_KIND',
        timestamp
    );
};

const changeTransactionAccount = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their transaction account.',
        'CHANGE_ACCOUNT',
        timestamp
    );
};

const changeTransactionDate = (timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to change their transaction date.',
        'CHANGE_DATE',
        timestamp
    );
};

const addTagToTransaction = (timestamp) => {
    return step(
        Interactions.WRITE,
        Actions.NONE,
        'User elected to add tag to their transaction.',
        'ADD_TAG',
        timestamp
    );
};

const changeTransactionTags = (timestamp) => {
    return step(
        Interactions.WRITE,
        Actions.NONE,
        'User elected to change their transaction tags.',
        'CHANGE_TAGS',
        timestamp
    );
};

const changeTransactionNote = (timestamp) => {
    return step(
        Interactions.WRITE,
        Actions.NONE,
        'User elected to change their transaction note.',
        'CHANGE_NOTE',
        timestamp
    );
};

const defaultStep = (type, timestamp) => {
    return step(
        Interactions.CLICK,
        Actions.NONE,
        'User elected to do something, but event unimplemented.',
        type,
        timestamp
    );
};

export const reducxEvent2HOC = (event) => {
    switch (event.type) {
        case 'TOGGLE_SIDEBAR': return navigationTo(event.timestamp);
        case 'TOGGLE_SIDEBAR': return navigationTo(event.timestamp);
        case 'TOGGLE_SECTION_COLLAPSE': return collapseClick(event.timestamp);
        case 'CHANGE_SETTINGS_CURRENCY': return changeSettingsCurrency(event.timestamp);
        case 'UPDATE_EXCHANGE_RATE': return updateExchangeRate(event.timestamp);
        case 'COMPLETE_SETUP': return completeSetup(event.timestamp);
        case 'SAVE_ACCOUNT': return saveAccount(event.timestamp);
        case 'REMOVE_ACCOUNT': return removeAccount(event.timestamp);
        case 'SAVE_TRANSACTION': return saveTransaction(event.timestamp);
        case 'REMOVE_TRANSACTION': return removeTransaction(event.timestamp);
        case 'CHANGE_REPORT_KIND': return changeReportKind(event.timestamp);
        case 'CHANGE_REPORT_TIMESPAN': return changeReportTimeSpan(event.timestamp);
        case 'CHANGE_REPORT_ACCOUNTS': return changeReportAccounts(event.timestamp);
        case 'CHANGE_REPORT_EXCLUDED_TAGS': return changeReportExcludedTags(event.timestamp);
        case 'MOVE_REPORT_DATE_BACKWARDS': return moveReportDateBackwards(event.timestamp);
        case 'MOVE_REPORT_DATE_FORWARDS': return moveReportDateForwards(event.timestamp);
        case 'OPEN_ACCOUNT_IN_MODAL': return openAccountInModal(event.timestamp);
        case 'CHANGE_NAME': return changeAccountName(event.timestamp);
        case 'CHANGE_GROUP': return changeAccountGroup(event.timestamp);
        case 'CHANGE_BALANCE': return changeAccountBalance(event.timestamp);
        case 'TOGGLE_CURRENCY': return changeAccountCurrency(event.timestamp);
        case 'TOGGLE_ON_DASHBOARD': return changeShowDashboardSetting(event.timestamp);
        case 'OPEN_TRANSACTION_IN_MODAL': return openTransactionInModal(event.timestamp);
        case 'CHANGE_KIND': return changeTransactionKind(event.timestamp);
        case 'CHANGE_ACCOUNT': return changeTransactionAccount(event.timestamp);
        case 'CHANGE_DATE': return changeTransactionDate(event.timestamp);
        case 'ADD_TAG': return addTagToTransaction(event.timestamp);
        case 'CHANGE_TAGS': return changeTransactionTags(event.timestamp);
        case 'CHANGE_NOTE': return changeTransactionNote(event.timestamp);
        default: return defaultStep(event.type, event.timestamp);
    }
};
