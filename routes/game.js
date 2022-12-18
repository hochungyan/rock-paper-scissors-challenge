// import express from 'express';
// import Player from "../src/Player.js";
// import battle from "../src/battle.js"

const express = require('express');
const Battle = require('../src/battle.js');
const Player = require('../src/player.js');
const router = express.Router();

router.post("/", (req, res) => {
    const name = req.body.player
    const player = new Player(name)
    req.app.locals.player = player;
    const game = new Battle(player)
    req.app.locals.game = game

    res.render("game", {
        name: name
    })
});

module.exports = router;

//export default router; 