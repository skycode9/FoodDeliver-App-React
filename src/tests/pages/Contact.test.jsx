import { render, screen } from "@testing-library/react";
import Contact from "../../pages/Contact";
import { describe, expect } from "vitest";
import React from "react";

describe("Contact us page Test case", () => {
  //   beforeAll(() => {
  //     console.log("Before All");
  //   });

  //   beforeEach(() => {
  //     console.log("Before Each");
  //   });

  //   afterAll(() => {
  //     console.log("After All");
  //   });

  //   afterEach(() => {
  //     console.log("After Each");
  //   });

  it("should load contact us page on site", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should load placeholder inside the inputbox", () => {
    render(<Contact />);
    const inputPlaceholderName = screen.getByPlaceholderText("name");
    expect(inputPlaceholderName).toBeInTheDocument();
  });

  //multiple check
  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox);
    expect(inputBox.length).toBe(2);
  });
});
