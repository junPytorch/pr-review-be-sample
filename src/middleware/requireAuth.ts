import type { NextFunction, Request, Response } from "express";

// Authorization: Bearer <token> を API_TOKEN と照合する
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.header("authorization") ?? "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length) : null;
  if (!token || !process.env.API_TOKEN || token !== process.env.API_TOKEN) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }
  next();
}
