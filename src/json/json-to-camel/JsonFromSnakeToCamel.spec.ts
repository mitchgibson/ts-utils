import { describe, it, expect } from "vitest";
import { jsonFromSnakeToCamel } from "./JsonFromSnakeToCamel";

describe("jsonFromSnakeToCamel", () => {
  it("should convert snake case to camel case", () => {
    const json = {
      first_name: "John",
      last_name: "Doe",
      address: {
        street_address: "123 Main St",
        city: "New York",
        state: "NY",
        zip_code: "10001",
      },
    };
    const camelJson = jsonFromSnakeToCamel(json);
    expect(camelJson).toEqual({
      firstName: "John",
      lastName: "Doe",
      address: {
        streetAddress: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    });
  });
  it("should convert snake case to camel case in arrays", () => {
    const json = [
      {
        first_name: "John",
        last_name: "Doe",
      },
      {
        first_name: "Jane",
        last_name: "Doe",
      },
    ];
    const camelJson = jsonFromSnakeToCamel(json);
    expect(camelJson).toEqual([
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
      },
    ]);
  });
  it("should not convert snake case to camel case in strings", () => {
    const json = {
      first_name: "John",
      last_name: "Doe",
      address: {
        street_address: "123 Main St",
        city: "New York",
        state: "NY",
        zip_code: "10001",
      },
    };
    const camelJson = jsonFromSnakeToCamel(JSON.stringify(json));
    expect(camelJson).toEqual(
      JSON.stringify({
        first_name: "John",
        last_name: "Doe",
        address: {
          street_address: "123 Main St",
          city: "New York",
          state: "NY",
          zip_code: "10001",
        },
      })
    );
  });
});
