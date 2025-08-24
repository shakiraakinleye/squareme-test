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
