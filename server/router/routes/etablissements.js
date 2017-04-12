'use strict';
let mService = require('./module-service.js')

module.exports = (app, db) => {

  app.get('/', (req, res) => {
    res.send("It's working");
  });

  app.get('/ets', (req, res) => {
    //  let ets = mService.getEts()
    db.ets.findAll()
      .then(ets => {
        res.json(ets);
      });
  });
};