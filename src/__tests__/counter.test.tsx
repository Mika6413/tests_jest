import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  it("renders the counter component", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
  it("renders the counter component and reads the value of count", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.textContent).toBe("Count: 0");
  });
  it("renders the counter component and reads the value of count, then click the button and expect value to be 1", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.textContent).toBe("Count: 0");

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(heading.textContent).toBe("Count: 1");
  });
});
