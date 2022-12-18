class Bot {

    constructor() {
      this.name = 'Computer'
      this.choice = botChoice();
    }
  }
  
  
  function botChoice() {
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
      return 'Rock'
  
    } if (choice === 1) {
      return 'Paper'

    } else { 
      return 'Scissors'
    }
  }
  // export default Bot;
  module.exports =Bot;