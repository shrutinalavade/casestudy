const chai =  require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const server = require('../server');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Washer Auth API", ()=> {


    /**
    * POST login route
    */
    
    describe('POST /login',()=>{
        it("it should login the washer", (done)=> {
            const loginCredentials = {
                email : "abcde@yahoo.in",
                password : "abc1234567"
            }
            chai.request(server)
                .post("/login")
                .send(loginCredentials)
                .end((err,response)=>{
                    response.should.have.status(201);
                    response.body.should.be.a('object');
                    done()
                })
        })

        it("it should not login the washer", (done)=> {
            const loginCredentials = {
                email : "abcd@yahoo",
                password : "abc1234567"
            }
            chai.request(server)
                .post("/login")
                .send(loginCredentials)
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })

        it("it should not login the washer", (done)=> {
            const loginCredentials = {
                email : "shruti@yahoo.in",
                password : "asdjkd"
            }
            chai.request(server)
                .post("/login")
                .send(loginCredentials)
                .end((err,response)=>{
                    response.should.have.status(400);
                    response.body.should.be.a('object');
                    done()
                })
        })
    })


})