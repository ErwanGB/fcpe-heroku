"use strict";

module.exports = (app, db) => {

  app.get('/', (req, res) => {
    res.send("It's working");
  });

  app.get('/ets', (req, res) => {
    db.ets.findAll()
      .then(ets => {
        res.json(ets);
      });
  });

  app.get('/ets/classes', (req, res) => {
    db.ets.findAll({
      include: {
        model: db.classe
      }
    })
      .then(ets => {
        res.json(ets);
      });
  });

};