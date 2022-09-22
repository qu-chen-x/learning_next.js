import { rest } from "msw";
export const handlers = [
  rest.get("/login", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post("/loginOut", (req, res, ctx) => {
    return res(ctx.status(403));
  }),
];
