import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("test for form component", () => {
  const handleOnSubmit = vi.fn(event => event.preventDefault());

  beforeEach(() => {
    render(
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Enter your username" />
        <label>
          Your password less than 5 symbols
          <input placeholder="Enter your password" />
        </label>

        <button type="submit">Login</button>
      </form>,
    );
  });

  it("should render username and password inputs", () => {
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should show an error message if password is less than 5 characters", () => {
    const passwordInput = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(passwordInput, { target: { value: "1234" } });
    fireEvent.blur(passwordInput);

    expect(screen.getByLabelText("Your password less than 5 symbols")).toBeInTheDocument();
  });

  it("should submit the form with valid data", () => {
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.any(Object));
  });
});
