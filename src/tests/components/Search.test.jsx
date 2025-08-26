import { it, vi, expect } from "vitest";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import Body from "../../pages/Body";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import RestaurantMockListData from "../../mocks/RestaurantMockListData.json";

// Mock fetch with correct API response structure
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      data: {
        cards: [
          {},
          {
            card: {
              card: {
                gridElements: {
                  infoWithStyle: {
                    restaurants: RestaurantMockListData
                  }
                }
              }
            }
          }
        ]
      }
    }),
  })
);

it("should render search component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser: "Test User", setUserName: vi.fn() }}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );
  });
  
  const searchInput = screen.getByPlaceholderText("Search Restaurant");
  expect(searchInput).toBeInTheDocument();
});
