/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Dog.sync({ force: true })
//     .then(() => Dog.create(dog)));
//   describe('GET /dogs', () => {
//     it('should get 200', () =>
//       agent.get('/dogs').expect(200)
//     );
//   });
// });
describe('Test route /dogs?name=...', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/dogs').expect(200))
    it('responds with the correct dog', () => 
      agent.get('/dogs?name=Leonberger').then((res) => {
        // console.log(res.body[0].name)
        expect(res.body[0].breed_group).to.be.equal('Working')
      }))
    it('shoul have the correct properties', () => {
      agent.get('/dogs?name=Bloodhound').then((res) =>{
        expect(res.body).to.have.property('temperament')
      })
    })
    ;})
} )