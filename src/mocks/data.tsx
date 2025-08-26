import { User } from "@/types/user";

export const mockUser: User = {
  id: "1",
  name: "Jane Doe",
  email: "jane@example.com",
  imageSrc: "",
  accountDetails: {
    bank: "UBA",
    accountNumber: "1234567890",
    accountName: "Mock User",
  },
};

export const mockTabs = [
  {
    id: "938930",
    title: "payments",
    query: "payments",
    content: (
      <div role="tabpanel" aria-label="payments tab panel">
        payments content
      </div>
    ),
  },
  {
    id: "93hf930",
    title: "orders",
    query: "orders",
    content: (
      <div role="tabpanel" aria-label="orders tab panel">
        orders content
      </div>
    ),
  },
  {
    id: "99h580",
    title: "accounts",
    query: "accounts",
    content: (
      <div role="tabpanel" aria-label="accounts tab panel">
        accounts content
      </div>
    ),
  },
  {
    id: "936jsk",
    title: "products",
    query: "products",
    content: (
      <div role="tabpanel" aria-label="products tab panel">
        products content
      </div>
    ),
  },
];

export const mockTransactions = [
    {
      "amount": 38948,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857908",
      "transaction_type": "Transfer",
      "date": "2022-02-12T00:00:00.000Z",
      "time": "2025-08-25T10:30:00.000Z",
      "status": "processed"
    },
    {
      "amount": 52200,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857909",
      "transaction_type": "Deposit",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T09:15:00.000Z",
      "status": "processed"
    },
    {
      "amount": 15000,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857910",
      "transaction_type": "Withdrawal",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T11:45:00.000Z",
      "status": "failed"
    },
    {
      "amount": 28900,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857911",
      "transaction_type": "Request",
      "date": "2022-02-13T00:00:00.000Z",
      "time": "2022-02-13T14:10:00.000Z",
      "status": "processed"
    },
    {
      "amount": 74800,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857912",
      "transaction_type": "Transfer",
      "date": "2022-02-14T00:00:00.000Z",
      "time": "2022-02-14T08:20:00.000Z",
      "status": "processed"
    },
    {
      "amount": 32400,
      "userId": '000124',
      "currency": "NGN",
      "transaction_id": "TR_8401857913",
      "transaction_type": "Withdrawal",
      "date": "2022-02-14T00:00:00.000Z",
      "time": "2022-02-14T16:30:00.000Z",
      "status": "failed"
    }
  ]

  export const mockRevenues = [
  {
    "id": "1",
    "userId": "000123",
    "amount": 320000,
    "date": "2025-01-15"
  },
  {
    "id": "2",
    "userId": "000123",
    "amount": 420000,
    "date": "2025-02-10"
  },
  {
    "id": "3",
    "userId": "000123",
    "amount": 480000,
    "date": "2025-03-20"
  },
  {
    "id": "4",
    "userId": "000123",
    "amount": 510000,
    "date": "2025-04-08"
  },
  {
    "id": "5",
    "userId": "000123",
    "amount": 490000,
    "date": "2025-05-14"
  },
  {
    "id": "6",
    "userId": "000123",
    "amount": 550000,
    "date": "2025-06-11"
  },
]