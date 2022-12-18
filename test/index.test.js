const chai =require('chai');
const chaiHttp =require('chai-http');
const { expect } = require("chai");
const App =require('../app.js');
chai.use(chaiHttp);

//Testing suite for the home page
describe('Testing suite for index.js', () => {
    it('Testing GetRequest from Index Page', async () => {
        const result = await chai.request(App)
            .get(`/`);
        expect(result).to.have.status(200);
    });

});