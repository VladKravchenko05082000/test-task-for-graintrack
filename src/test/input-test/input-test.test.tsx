import { describe, expect, beforeEach, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for input", () => {
  beforeEach(() => {
    render(<input />);
  });

  test("should be an input element", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into the input", () => {
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
    expect(inputElement).toHaveValue("Hello, World!");
  });
});
