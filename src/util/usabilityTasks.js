const task1 = {
  id: '00',
  title: 'Create an Cash Account',
  scenario:
    'You want to manage your expenses by using the Money-tracker app. This app can help you make records and track income and expenses.',
  description:
    'Create a new CASH account with initial 100 dollars balance for yourself. Save the account and go to the dashboard.'
};

const task2 = {
  id: '01',
  title: 'Add a Transaction in Dashboard',
  scenario: 'You want to add a trasaction record in this Money Tracker App.',
  description: 'Add one expense (tags: books) with 10 dollars on 12/10/2021.'
};

const task3 = {
  id: '02',
  title: `Edit the Transaction`,
  scenario:
    'You just added one transactions in the app. However, you realized that you had made a mistake and wanted to change the transaction record.',
  description:
    'Find the transaction that you just made. Change 10 dollars to 15 dollars.'
};

const task4 = {
  id: '03',
  title: 'Find the Total Expense',
  scenario:
    'You want to check your history transactions and determine how much you spent on food in December 2021.',
  description: 'Find the total amount you spent on food in Dec 2021'
};

const task5 = {
  id: '04',
  title: 'Transfer the Transaction Records',
  scenario:
    'You decided to create a new bank account in Money-Tracker and transfer all transactions in the cash account to the bank account.',
  description: 'Create a bank Account with initial 1000 dollars balance. Delete the cash account and transfer the transactions.'
};

const task6 = {
  id: '05',
  title: 'Transfer Money',
  scenario:
    'You will create a credit account and transfer 100 dollars from the bank account to the credit account.',
  description: 'Create a credit account and tansfer 100 dollars from bank to credit account.'
};

const groupA = [task1, task2, task3, task4, task5, task6];
const groupB = [task1, task2, task3, task4, task5, task6];
const groupC = [task1, task2, task3, task4, task5, task6];

const taskGroupIds = ['A', 'B', 'C'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getTaskGroup() {
  const groupIdx = getRandomInt(3);
  return taskGroupIds[groupIdx];
}
export function getTask(groupId, taskId) {
  var tasks;
  switch (groupId) {
    case 'A':
      tasks = groupA;
      break;
    case 'B':
      tasks = groupB;
      break;
    case 'C':
      tasks = groupC;
      break;
    default:
      throw 'Invalid groupId';
  }
  return tasks[taskId - 1];
}

export const tasks = [task1, task2, task3, task4, task5, task6];
