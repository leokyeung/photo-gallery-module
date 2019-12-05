import "@babel/polyfill";
const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);


describe('Test GET API request', () => {
  it('Gets the test endpoint', async done => {
    const res = await request.get('/listings/pictures');
    expect(res.status).toBe(200);
    done();

  });
});