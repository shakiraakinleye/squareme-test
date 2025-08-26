/**
 * @jest-environment node
 */

import { getTransactions } from "@/api/transactions";
import { mockUser, mockTransactions } from "@/mocks/data";
import {server} from "@/mocks/server"

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("should return all transactions", async () => {
  const transactions = await getTransactions(mockUser.id, 2, 4);
  expect(transactions.total).toEqual(mockTransactions.length);
});