import listContacts from "./listContacts";
import getContactById from "./getContactById";
import addContact from "./addContact";
import updateContact from "./updateContact";
import removeContact from "./removeContact";

export default {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};

// import chalk from 'chalk';
// import { Command } from 'commander';

// import listContacts from './listContacts';
// import getContactById from './getContactById';
// import addContact from './addContact';
// import removeContact from './removeContact';

// const program = new Command();
// program
//   .requiredOption('-a, --action <type>', 'choose action')
//   .option('-i, --id <type>', 'user id')
//   .option('-n, --name <type>', 'user name')
//   .option('-e, --email <type>', 'user email')
//   .option('-p, --phone <type>', 'user phone');

// program.parse(process.argv);

// const argv = program.opts();

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case 'list':
//       await listContacts();
//       console.table(listContacts);
//       break;

//     case 'get':
//       await getContactById(id);
//       if (id) {
//         console.log(chalk.green('Contact found'));
//         console.log(id);
//         return;
//       } 
//       console.log(chalk.yellow('Contact not found'));
      
//       break;

//     case 'add':
//       await addContact(name, email, phone);
//       console.log(chalk.green('Add new contact'));
//       break;

//     case 'remove':
//       await removeContact(id);
//       if (removeContact === 'undefined' ) {
//         console.log(chalk.red(`Сontact with id: ${id} deleted`));
//         return;
//       }
//       console.log(chalk.yellow(`Contact with id: ${id} is missing or has been deleted `));
//       break;

//     default:
//       console.warn(chalk.red('Unknown action type!'));
//   }
// }

// (async()=>{
// await invokeAction(argv)
// })()
