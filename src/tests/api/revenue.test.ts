/**
 * @jest-environment node
 */

import { getRevenueData } from "@/api/revenue";
import { mockUser, mockRevenues } from "@/mocks/data";
import { server } from "@/mocks/server";
import { sumRevenue, groupRevenues } from "@/utils/revenue-chart-utils";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should return total revenue value", async () => {
  const revenues = await getRevenueData(mockUser.id, "year");
  expect(revenues.total).toEqual(sumRevenue(mockRevenues));
});

test("should return the right chart data", async () => {
  const filter = "year";
  const revenues = await getRevenueData(mockUser.id, filter);
  expect(revenues.chart).toEqual(groupRevenues(mockRevenues, filter));
});
