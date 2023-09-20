import { describe, expect, test, beforeAll } from "bun:test";
import sum from "../index";

describe("function", () => {
  test("add", () => {
    expect(sum(2,9)).toMatchSnapshot();
  });
});