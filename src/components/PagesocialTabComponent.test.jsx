import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PagesocialTabComponent from "./PagesocialTabComponent";

function renderWithRouter(ui) {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
}

describe("PagesocialTabComponent", () => {
  it("renders the header and tabs", () => {
    renderWithRouter(<PagesocialTabComponent />);

    expect(screen.getByText(/Just In, Home Feed/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /For You/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /Trending/i })).toBeInTheDocument();
  });

  it("lets the user switch tabs", async () => {
    const user = userEvent.setup();
    renderWithRouter(<PagesocialTabComponent />);

    const tab = screen.getByRole("tab", { name: /Trending/i });
    await user.click(tab);

    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  it("renders bottom navigation links", () => {
    renderWithRouter(<PagesocialTabComponent />);

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Search/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Inbox/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Profile/i })).toBeInTheDocument();
  });
});