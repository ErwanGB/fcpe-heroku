'use strict'
let mData = require('./module-data');

/**
 * This is a Business Access Layer for etablissements (ets)
 */
module.exports = (db) => {

    function getEts(){
        return this.mData.getEts();
    }
}

