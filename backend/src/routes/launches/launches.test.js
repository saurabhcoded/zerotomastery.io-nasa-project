const request = require("supertest");
const { response } = require("../../app");
const app = require("../../app");
describe("Test GET /launches", () => {
  test("It Should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /html/)
      .expect(200);
    // expect(response.statusCode).toBe(200);
  });
});
describe("Test POST /launches", () => {
  test("It Should respond with 200 success", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "ABCD",
        target: "Kepler",
        launchDate: "January 4,2012",
      })
      .expect("Content-Type", /json/)
      .expect(201);
    expect(response.body).toMatchObject({
      mission: "USS Enterprise",
      rocket: "ABCD",
      target: "Kepler",
      launchDate: "January 4,2012",
    });
  });
  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "ABCD",
        target: "Kepler",
        launchDate: "January 4,2012",
      })
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: 'expected 400 "Bad Request", got 201 "Created"',
    });
  });
  test("It should catch invalid dates", () => {});
});
