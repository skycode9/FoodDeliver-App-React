import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import RestaurantCard, {
  withLabledRestaurantCard,
} from "../../components/RestaurantCard";
import RestaurantCardMockData from "../../mocks/RestaurantCardMockData.json";
import React from "react";

it("should render restaturant card with Props Data", () => {
  render(<RestaurantCard restData={RestaurantCardMockData.info} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Create the enhanced component using the HOC
  const RestaurantCardWithLabel = withLabledRestaurantCard(RestaurantCard);

  render(<RestaurantCardWithLabel restData={RestaurantCardMockData.info} />);

  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();

  // Test that the promoted label is displayed
  const promotedLabel = screen.getByText("ITEMS AT ₹98");
  expect(promotedLabel).toBeInTheDocument();
});
