const chai = require('chai');
const server = require('../server');
const chaiHttp = require('chai-http');

//Assertion style
chai.should();
chai.use(chaiHttp);

describe('Customer Auth API', ()=>{

    /**
     * Test the POST login route
    */
   describe("POST /login", () => {
        it("it should login the customer", (done) =>{
        const userCredentials =  {
            "email" : "customer3@gmail.com",
            "password" : "shruti123"
        }
        chai.request(server)
            .post("/login")
            .send(userCredentials)
            .end((err, response) =>{
            response.should.have.status(201);
            response.should.be.a('object');
            done();
            })
        })

    it("it should not login the customer", (done) =>{
        const userCredentials =  {
        "email" : "cust2@gmail.com",
        "password" : "123"
        }
        chai.request(server)
        .post("/login")
        .send(userCredentials)
        .end((err, response) =>{
            response.should.have.status(400);
            response.should.be.a('object');
            done();
        })
        })

    it("it should not login the customer", (done) =>{
          const userCredentials =  {
            "email" : "cust2@gmail.com",
            "password" : "1234"
          }
          chai.request(server)
          .post("/login")
          .send(userCredentials)
          .end((err, response) =>{
              response.should.have.status(400);
              response.should.be.a('object');
              done();
          })
          })

  })
})