import { describe, it, expect } from "vitest";
import { jsonFromCamelToSnake } from "./JsonFromCamelToSnake";

describe("jsonFromCamelToSnake", () => {
  it("should convert camel case to snake case", () => {
    const json = {
      firstName: "John",
      lastName: "Doe",
      address: {
        streetAddress: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    };
    const snakeJson = jsonFromCamelToSnake(json);
    expect(snakeJson).toEqual({
      first_name: "John",
      last_name: "Doe",
      address: {
        street_address: "123 Main St",
        city: "New York",
        state: "NY",
        zip_code: "10001",
      },
    });
  });
  it("should convert camel case to snake case in arrays", () => {
    const json = [
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
      },
    ];
    const snakeJson = jsonFromCamelToSnake(json);
    expect(snakeJson).toEqual([
      {
        first_name: "John",
        last_name: "Doe",
      },
      {
        first_name: "Jane",
        last_name: "Doe",
      },
    ]);
  });
  it("should not convert camel case to snake case in strings", () => {
    const json = {
      firstName: "John",
      lastName: "Doe",
      address: {
        streetAddress: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    };
    const snakeJson = jsonFromCamelToSnake(json);
    expect(snakeJson).toEqual({
      first_name: "John",
      last_name: "Doe",
      address: {
        street_address: "123 Main St",
        city: "New York",
        state: "NY",
        zip_code: "10001",
      },
    });
  });
});