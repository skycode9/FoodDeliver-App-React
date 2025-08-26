import { it, vi, expect } from "vitest";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../../pages/Body";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import RestaurantMockListData from "../../mocks/RestaurantMockListData.json";

// Mock fetch with correct API response structure
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {},
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: RestaurantMockListData,
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

it("should render search component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{ loggedInUser: "Test User", setUserName: vi.fn() }}
        >
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByPlaceholderText("Search Restaurant");
  expect(searchInput).toBeInTheDocument();

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(20);

  const searchValue = "Pizzas";
  fireEvent.change(searchInput, { target: { value: searchValue } });

  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(4);
});

it("should filter top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{ loggedInUser: "Test User", setUserName: vi.fn() }}
        >
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );
  });

  const cardBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });
  fireEvent.click(topRatedBtn);
  console.log("topRatedBtn", topRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard");
  expect(cardAfterFilter.length).toBe(6);
});
