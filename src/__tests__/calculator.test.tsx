import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe("Calculator", () => {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  it("adds two numbers", () => {
    expect(sum(1, 1)).toBe(2);
  });

  const substract = (a: number, b: number): number => {
    return a - b;
  };
  it("subtracts two numbers", () => {
    expect(substract(10, 5)).toBe(5);
  });

  const multiply = (a: number, b: number): number => {
    return a * b;
  };
  it("multiplies two numbers", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  const divide = (a: number, b: number): number => {
    return a / b;
  };
  it("divides two numbers", () => {
    expect(divide(9, 3)).toBe(3);
  });
});
