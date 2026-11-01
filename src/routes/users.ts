import { Router } from "express";

import { findUserById } from "../repositories/userRepository.js";
import type { User } from "../types/user.js";

// API レスポンスの形に変換する（avatarUrl は値がある場合だけ含める）
export function toUserResponse(user: User) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    ...(user.avatarUrl !== undefined ? { avatarUrl: user.avatarUrl } : {}),
  };
}

export const usersRouter = Router();

usersRouter.get("/api/users/:id", (req, res) => {
  const user = findUserById(req.params.id);
  if (!user) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.status(200).json(toUserResponse(user));
});
