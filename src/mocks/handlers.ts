import { http, HttpResponse } from "msw";
import { mockTransactions, mockRevenues } from "./data";

export const handlers = [
  http.get(
    "https://68acccfeb996fea1c08aeb78.mockapi.io/squareme/transactions",
    () => {
      return HttpResponse.json(mockTransactions);
    }
  ),
  http.get(
    "https://68acccfeb996fea1c08aeb78.mockapi.io/squareme/revenues",
    () => {
      return HttpResponse.json(mockRevenues);
    }
  ),
];
