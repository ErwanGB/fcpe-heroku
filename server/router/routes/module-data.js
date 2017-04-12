'use strict'
module.exports = (db) => {

    function getEts() {
        return db.ets.findAll().then(ets => {
            console.log(ets)
            return ets;
        })
    }
}