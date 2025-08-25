import { RevenueData } from "@/types/dashboard";
import { TransactionsData } from "@/types/transactions";

export const getRevenueData = async (userId: string, filter: string) => {
  console.log(userId, filter);
  // const res = await fetch(
  //   `https://api.fake.com/?userId=${userId}&data=${revenue}&filter=${filter}`
  // );

  // if (!res.ok) {
  //   throw new Error("Network response was not ok");
  // }

  // const data = await res.json();

  const data: RevenueData = {
    id: "monthly",
    filter: "last year",
    growth: 0,
    totalRevenue: 1500000,
    data: [
      { timeframe: "January", value: 320000 },
      { timeframe: "February", value: 420000 },
      { timeframe: "March", value: 480000 },
      { timeframe: "April", value: 510000 },
      { timeframe: "May", value: 490000 },
      { timeframe: "June", value: 550000 },
      { timeframe: "July", value: 510000 },
      { timeframe: "August", value: 200000 },
      { timeframe: "September", value: 780000 },
      { timeframe: "October", value: 350000 },
      { timeframe: "November", value: 190000 },
      { timeframe: "December", value: 480000 },
    ],
  };
  return data;
};

export const getTransactions = async(userId: string, page: number) => {


  const page1 = {
    "page": 1,
    "per_page": 6,
    "total": 20,
    "transactions": [
      {
        "amount": 43644,
        "currency": "NGN",
        "transaction_id": "TR_8401857902",
        "transaction_type": "Transfer",
        "date": "2022-02-12",
        "time": "2025-08-25T10:30:00Z",
        "status": "processed"
      },
      {
        "amount": 35471,
        "currency": "NGN",
        "transaction_id": "TR_8401857903",
        "transaction_type": "Withdrawal",
        "date": "2022-02-12",
        "time": "2025-08-25T10:22:00Z",
        "status": "failed"
      },
      {
        "amount": 43644,
        "currency": "NGN",
        "transaction_id": "TR_8401857904",
        "transaction_type": "Deposit",
        "date": "2022-02-12",
        "time": "2025-08-25T10:01:00Z",
        "status": "processed"
      },
      {
        "amount": 35471,
        "currency": "NGN",
        "transaction_id": "TR_8401857905",
        "transaction_type": "Request",
        "date": "2022-02-12",
        "time": "2025-08-24T10:30:00Z",
        "status": "failed"
      },
      {
        "amount": 43644,
        "currency": "NGN",
        "transaction_id": "TR_8401857906",
        "transaction_type": "Transfer",
        "date": "2022-02-12",
        "time": "2025-08-23T12:30:00Z",
        "status": "processed"
      },
      {
        "amount": 35471,
        "currency": "NGN",
        "transaction_id": "TR_8401857907",
        "transaction_type": "Transfer",
        "date": "2022-02-12",
        "time": "2025-08-20T10:05:00Z",
        "status": "failed"
      }
    ],
    "next_page": 2
  }
const page2 = {
  "page": 2,
  "per_page": 6,
  "total": 20,
  "transactions": [
    {
      "amount": 38948,
      "currency": "NGN",
      "transaction_id": "TR_8401857908",
      "transaction_type": "Transfer",
      "date": "2022-02-12T00:00:00.000Z",
      "time": "2025-08-25T10:30:00.000Z",
      "status": "processed"
    },
    {
      "amount": 52200,
      "currency": "NGN",
      "transaction_id": "TR_8401857909",
      "transaction_type": "Deposit",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T09:15:00.000Z",
      "status": "processed"
    },
    {
      "amount": 15000,
      "currency": "NGN",
      "transaction_id": "TR_8401857910",
      "transaction_type": "Withdrawal",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T11:45:00.000Z",
      "status": "failed"
    },
    {
      "amount": 28900,
      "currency": "NGN",
      "transaction_id": "TR_8401857911",
      "transaction_type": "Request",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T14:10:00.000Z",
      "status": "processed"
    },
    {
      "amount": 74800,
      "currency": "NGN",
      "transaction_id": "TR_8401857912",
      "transaction_type": "Transfer",
      "date": "2022-02-14T00:00:00.000Z",
      "time": "2022-02-14T08:20:00.000Z",
      "status": "processed"
    },
    {
      "amount": 32400,
      "currency": "NGN",
      "transaction_id": "TR_8401857913",
      "transaction_type": "Withdrawal",
      "date": "2022-02-14T00:00:00.000Z",
      "time": "2022-02-14T16:30:00.000Z",
      "status": "failed"
    }
  ],
  "next_page": 3
};

const page3 = {
  "page": 3,
  "per_page": 6,
  "total": 20,
  "transactions": [
    {
      "amount": 61500,
      "currency": "NGN",
      "transaction_id": "TR_8401857914",
      "transaction_type": "Deposit",
      "date": "2022-02-15T00:00:00.000Z",
      "time": "2025-08-25T10:30:00.000Z",
      "status": "processed"
    },
    {
      "amount": 28000,
      "currency": "NGN",
      "transaction_id": "TR_8401857915",
      "transaction_type": "Transfer",
      "date": "2022-02-15T00:00:00.000Z",
      "time": "2022-02-15T12:45:00.000Z",
      "status": "failed"
    },
    {
      "amount": 49900,
      "currency": "NGN",
      "transaction_id": "TR_8401857916",
      "transaction_type": "Request",
      "date": "2022-02-15T00:00:00.000Z",
      "time": "2022-02-15T15:00:00.000Z",
      "status": "processed"
    },
    {
      "amount": 11000,
      "currency": "NGN",
      "transaction_id": "TR_8401857917",
      "transaction_type": "Withdrawal",
      "date": "2022-02-15T00:00:00.000Z",
      "time": "2022-02-15T18:15:00.000Z",
      "status": "failed"
    },
    {
      "amount": 72000,
      "currency": "NGN",
      "transaction_id": "TR_8401857918",
      "transaction_type": "Transfer",
      "date": "2022-02-16T00:00:00.000Z",
      "time": "2022-02-16T09:30:00.000Z",
      "status": "processed"
    },
    {
      "amount": 13200,
      "currency": "NGN",
      "transaction_id": "TR_8401857919",
      "transaction_type": "Withdrawal",
      "date": "2022-02-16T00:00:00.000Z",
      "time": "2022-02-16T13:20:00.000Z",
      "status": "processed"
    }
  ],
  "next_page": 4
};

const page4 = {
  "page": 4,
  "per_page": 6,
  "total": 20,
  "transactions": [
    {
      "amount": 25000,
      "currency": "NGN",
      "transaction_id": "TR_8401857920",
      "transaction_type": "Deposit",
      "date": "2022-02-16T00:00:00.000Z",
      "time": "2022-02-16T17:45:00.000Z",
      "status": "processed"
    },
    {
      "amount": 47000,
      "currency": "NGN",
      "transaction_id": "TR_8401857921",
      "transaction_type": "Transfer",
      "date": "2022-02-16T00:00:00.000Z",
      "time": "2022-02-16T19:10:00.000Z",
      "status": "failed"
    }
  ],
  "next_page": null
};

  let data: TransactionsData;
  switch(page){
    case 1:
      data = page1;
      break;
    case 2:
      data = page2;
      break;
    case 3:
      data = page3;
      break;
    case 4:
      data = page4;
      break;
      default:
        data = page1;
  }

  return data;
}