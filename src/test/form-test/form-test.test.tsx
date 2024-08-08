import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../../pages/login/form";

describe("LoginFrom component test", () => {
  const handleOnSubmit = vi.fn(event => event.preventDefault());

  beforeEach(() => {
    render(<LoginForm handleOnSubmit={handleOnSubmit} pending={false} />);
  });

  it("should render username and password inputs", () => {
    const usernameInput: HTMLInputElement = screen.getByPlaceholderText("Enter your username");
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Enter your password");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("password should is more or equal than 5 characters", () => {
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(passwordInput, { target: { value: "12345" } });
    fireEvent.blur(passwordInput);

    expect(passwordInput.value.length).greaterThanOrEqual(5);
  });

  it("should submit the form with valid data", () => {
    const usernameInput: HTMLInputElement = screen.getByPlaceholderText("Enter your username");
    const passwordInput: HTMLInputElement = screen.getByPlaceholderText("Enter your password");
    const submitButton: HTMLButtonElement = screen.getByRole("button", { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    expect(handleOnSubmit).toHaveBeenCalledTimes(1);
    expect(handleOnSubmit).toHaveBeenCalledWith(expect.any(Object));
  });
});
