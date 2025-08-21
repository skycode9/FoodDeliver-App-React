import { expect, test } from "vitest";
import Sum from "../../components/Sum";

test("Sum function calculate the sum of two numbers", () => {
  const result = Sum(3, 4);
  expect(result).toBe(7);
});
