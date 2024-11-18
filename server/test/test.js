const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupExpressServer } = require("../src/server.js");

chai.use(chaiHttp);
chai.should();

const { expect } = chai;
const server = setupExpressServer(); // Expressサーバのセットアップ

describe("Diary App API", () => {
    it("GET /api/entries should return all entries", (done) => {
        chai.request(server)
            .get("/api/entries")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                done();
            });  
    });

    it("POST /api/entries should create entry", (done) => {
        const newEntry = {
            content : "test"
      };
        chai.request(server)
            .post("/api/entries")
            .send(newEntry)
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body.content).to.equal("test");
                done();
            });     
    });


    it("DELETE /api/delete should delete entry", (done) => {
        chai.request(server)
            .delete("/api/delete/18")
            .end((err, res) => {
                expect(res).to.have.status(204);
                done();
            });     
    });

});