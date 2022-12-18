class Battle {
    player
    bot
  
    constructor(player, bot) {
      this.player = player
      this.bot = bot;
    }
  
    result(bot, playerChoice) {
      if (playerChoice === bot.choice) {
        return `Its a draw`
  
      } else if (playerChoice === 'Paper' && bot.choice === 'Rock') {
        return `You are the winner!`
        //return `${player.name} is the winner`
      } else if (playerChoice === 'Scissors' && bot.choice === 'Paper') {
        return `You are the winner!`
        //return `${player.name} is the winner`
      } else if (playerChoice === 'Rock' && bot.choice === 'Scissors') {
        return `You are the winner!`
        //return `${player.name} is the winner`
      } else {
        return `${bot.name} is the winner!`
      }
   
    }
  }
  
    
  
  module.exports =Battle;
  
  
  // export default Battle;