'use strict';
var require;
const routes = [
  /*require('./routes/owners'),
  require('./routes/pets')
  require('./routes/cities'),
  require('./routes/airports'),
  require('./routes/flights'),*/
  require('./routes/etablissements')
];


// Add access to the app and db objects to each route
var module;
module.exports = function router(app, db) {
  return routes.forEach((route) => {
    route(app, db);
  });
};