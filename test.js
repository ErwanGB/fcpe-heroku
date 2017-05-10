"use strict";

let expect = require('expect')
var should = require('should'); 
var request = require('supertest'); 

describe('Test',()=>{
    it("it should return 400",()=>{
        request('http://localhost:8080')
        .get('/ets')
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear hohoho
          res.should.have.status(400);
          done();
        });
    })
})


