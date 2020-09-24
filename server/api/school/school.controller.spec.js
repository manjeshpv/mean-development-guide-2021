// supertest - api testing
const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

const schools = ['a', 'b'];
// mock
describe('School Unit', () => {
  schools.forEach((x) => {
    it('GET /api/schools should return a schools', () => {
      // postman
      request(app)
        .get('/api/schools?page=1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          console.log(res.text);
          expect(res.text).to.be.equal('Amarical School in Noida.');
          if (err) throw err;
        });
    });
  });


  it('POST /api/schools should return a schools', () => {
    // postman
    request(app)
      .post('/api/schools')
      .send({
        name: 'american school',
        city: 'Bangalore',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        console.log(res.text);
        expect(res.text).to.be.equal('Amarical School in Noida.');
        if (err) throw err;
      });
  });
});
