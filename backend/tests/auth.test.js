const request = require("supertest");
const app = require("../server");

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({ name: "John", email: "john@example.com", password: "123456" });
    expect(res.statusCode).toBe(200);
  });
});
