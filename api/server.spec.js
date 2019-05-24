const request = require("supertest")

const server = require("./server.js")

describe("server.js", () => {
    it("should set the testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe("endpoints", () => {
        describe("GET /games", () => {
            // test for res.status
            it("should return 200 OK using async/await THE SQUAD", async () => {
                const res = await request(server).get("/games")
                expect(res.status).toBe(200)
            })

            // test for res.type JSON
            it("should return JSON", async () => {
                const res = await request(server).get("/games")
                expect(res.type).toBe("application/json")
            })

            // test for res.body
            it('should return { api: "up" }', async () => {
                const res = await request(server).get("/games")
                expect(res.body).toEqual({ api: "up" })
            })
        })
        describe("POST /games", () => {
            // test for res.status
            it("should return 200 OK using async/await THE SQUAD", async () => {
                const res = await request(server).post("/games")
                expect(res.status).toBe(200)
            })

            // test for res.type JSON
            it("should return JSON", async () => {
                const res = await request(server).post("/games")
                expect(res.type).toBe("application/json")
            })

            // test for res.body
            it('should return { api: "up" }', async () => {
                const res = await request(server).post("/games")
                expect(res.body).toEqual({ api: "up" })
            })
        })
    })
})
