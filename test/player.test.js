const Player = require("../src/player");
const { expect } = require("chai");

describe(`Testing the player class`, () => {
    it(`Testing for the player name property`, () => {

        const player = new Player('monaire');
        expect(player.name).to.be.equal('monaire')
    })

    it(`Testing for the player choice property`, () => {

        const player = new Player('monaire','rock');
        expect(player.choice).to.be.equal('rock')
    })



})