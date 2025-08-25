import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Header from "../../components/Header";
import React from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";

// Helper function to render Header with all providers
const renderHeader = (userContextValue = { loggedInUser: "Test User" }) => {
  return render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={userContextValue}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

it("should header component with a login button", () => {
  renderHeader();

  const loginBtn = screen.getByRole("button", { name: "Login" });
  expect(loginBtn).toBeInTheDocument();
});

it("should header component with Cart", () => {
  renderHeader();

  const cartBtn = screen.getByText("Cart - (0 items)");
  expect(cartBtn).toBeInTheDocument();
});

it("should header component with a logout button", () => {
  renderHeader();

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

it("should header component with online status", () => {
  renderHeader();

  const onlineStatus = screen.getByText("Online");
  expect(onlineStatus).toBeInTheDocument();
});

it("should header component with offline status", () => {
  renderHeader();

  // Simulate going offline
  fireEvent(window, new Event("offline"));

  const offlineStatus = screen.getByText("Offline");
  expect(offlineStatus).toBeInTheDocument();
});

it("should header component display user name", () => {
  renderHeader({ loggedInUser: "John Doe" });

  const userName = screen.getByText("John Doe");
  expect(userName).toBeInTheDocument();
});

it("Should render Header Component with a Cart item ", () => {
  renderHeader();

  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});
