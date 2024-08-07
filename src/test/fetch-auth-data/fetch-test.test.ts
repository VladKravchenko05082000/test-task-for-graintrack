import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";

describe("Test login request", () => {
  let response: Response;
  let body: { [key: string]: unknown };

  beforeAll(async () => {
    response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
      }),
    });
    body = await response.json();
  });

  test("Should have response status 200", () => {
    expect(response.status).toBe(200);
  });

  test("Should have array in the body", () => {
    expectTypeOf(body).toBeObject();
  });

  test("Is have token in body", () => {
    expect(body).haveOwnProperty("token");
  });
});
