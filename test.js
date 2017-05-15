"use strict";

let expect = require('expect')
var should = require('should'); 
var request = require('supertest'); 





describe('Test',()=>{
    it("it should return 200",(done)=>{
        console.log("err ---> ")
        request('http://localhost:8080')
        .get('/ets')
        .expect(404,done)
    })
})


