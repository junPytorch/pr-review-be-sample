import type { User } from "../types/user.js";

// サンプル用のインメモリデータ
const users = new Map<string, User>([
  ["1", {
    id: "1",
    name: "Alice",
    email: "alice@example.com",
    avatarUrl: "https://example.com/avatars/alice.png",
  }],
  ["2", { id: "2", name: "Bob", email: "bob@example.com" }],
]);

export function findUserById(id: string): User | undefined {
  return users.get(id);
}
