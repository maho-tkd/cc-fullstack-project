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
});