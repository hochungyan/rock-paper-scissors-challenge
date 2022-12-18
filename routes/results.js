// import express from "express";
// import bot from '../src/bot'
// import battle from '../src/battle.js';
const express = require('express');
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');
const bot = require('../src/bot.js');
const router = express.Router();


// router.post(`/`, (req, res) => {
    router.post(`/`, (req, res) => {
    const Bot = new bot()
    const player = req.app.locals.player
   const game =new Battle(player)
   req.app.locals.game = game
    // const playerChoice = req.body.choice
    
    // const playerChoice = req.body.choice
    const playerChoice = req.body.choice
    player.choice = playerChoice
    const result = game.result(Bot, playerChoice)
    
     res.render("results", {
       
        Bot: Bot,
        // playerChoice:playerChoice,
        playerChoice: player.choice,
        result: result,     
        name: player.name
    });



});
module.exports = router;
