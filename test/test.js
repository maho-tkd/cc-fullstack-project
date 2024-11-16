const chai = require("chai");
const chaiHttp = require("chai-http");
const { setupExpressServer } = require("./server/src/server");

chai.use(chaiHttp);
chai.should();
const server = setupServer();

describe("Diary App API", () => {
    let request;
    beforeEach(() => {
        request = chai.request(server);
    });


    it("GET /api/entries - should have all diary entries", async () => {
        const res = await request.get("/api/entries");
        res.should.have.status(200);
        res.body.should.be.a("array");
    });

});