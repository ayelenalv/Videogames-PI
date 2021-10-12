const { Videogame, conn } = require('../../src/db.js');


describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: false }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });

      it('should throw an error if description is null', (done) => {
        Videogame.create({ name: 'Zelda'})
          .then(()=> done(new Error('It requires a description')))
          .catch(() => done());
      });

      it('should throw an error if platforms is null', (done)=> {
        Videogame.create({name: 'Bloodborne', description:'A bloody game'})
          .then(()=> done(new Error('It requires a platform to play')))
          .catch(() => done());
      })

      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
});