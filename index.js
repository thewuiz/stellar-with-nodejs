const inquirer = require('inquirer')
const createEscrow = require('./actions/alice/create-escrow.js')

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'list',
      name: 'whois',
      message: 'Quien eres?',
      choices: ['Alis', 'Bob'],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.whois == 'Alis') {
      inquirer
        .prompt({
          type: 'list',
          name: 'action',
          message: 'Que quieres hacer Alice?',
          choices: ['Crear el escrow'],
        })
        .then((answersAlice) => {
          if (answersAlice.action == 'Crear el escrow') createEscrow()
        })
        .catch((error) => {
          console.error(error)
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        })
    }
  })
  .catch((error) => {
    console.error(error)
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
