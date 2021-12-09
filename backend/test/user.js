var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect

describe("CRUD OPERATIONS on user", function () {

    const users = [
        {
            "firstName": "Sanjay",
            "lastName": "Bhansali",
            "password": "Sanjay3*",
            "email": "Sanjay.Bhansali@gmail.com",
            "phoneNumber":9902194739

        }, {
            "firstName": "Hrishikesh",
            "lastName": "P",
            "password": "Hrishikesh3*",
            "email": "hrishikesh@gmail.com",
            "phoneNumber":7338221810

        }
    ]
    it("Should add users in DB", async () => {

        for (u in users) {
            let res = await chai.request(server).post('/users').send(users[u])
            res.should.have.status(200);
            console.log("Response Body:", res.body);
            }     
    })

    it("Should Fetch all the users", async () => {
        let res = await chai.request(server).get("/users")
        res.should.have.status(200);
        console.log(res.body)
        expect(res.body).to.have.a.lengthOf(2)
    })

    it("Should Fetch Particular user only", (done) => {
        chai.request(server).get("/users/61b02d53fdda039433400058").end((err, result) => {
            result.should.have.status(200)
            console.log("Fetched Particlar user using /GET/Users/:UserID ::::", result.body)
            done()
        })
    })

    it("Should Update Partcular User Only", (done) => {
        var updatedUser = {
            "firstName": "Shravani",
            "lastName": "P",
            "password": "Shravaniii3*",
            "email": "Shravani@gmail.com",
            "phoneNumber":9902194739
        }

        chai.request(server).put("/users/61b02d53fdda039433400058").send(updatedUser).end((err, result) => {
            result.should.have.status(200)
            console.log("Updated Particlar User using /GET/UserS/:USERID ::::", result.body)
            done()
        })
    })

    it("should check data updated in DB", (done) => {
        chai.request(server).get("/users/61b02d53fdda039433400058").end((err, result) => {
            result.should.have.status(200)
           result.body.message.email.should.eq("Shravani@gmail.com")
            console.log("Fetched Particlar user using /GET/USERS/:USERID ::::", result.body)
            done()
        })
    })


    it("Should Delete Particular User", (done) => {
        chai.request(server).delete("/users/61b02d54fdda03943340005c").end((err, result) => {
            result.should.have.status(200)
            console.log("Deleted Particlar user ", result.body)
            done()
        })
    })

    it("Should confirm delete with number of Docs from DB", (done) => {
        chai.request(server).get("/users/").end((err, result) => {
            result.should.have.status(200);
            result.body.length.should.eq(1);
            console.log("Got", result.body.length, " docs")
            done()
        })
    })
   
})

