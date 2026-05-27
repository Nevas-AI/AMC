// Vercel Serverless Function - Routes all requests through TanStack Start
import type { VercelRequest, VercelResponse } from "@vercel/node";

let server: any;

async function getServer() {
  if (server) {
    return server;
  }

  const { default: app } = await import("../dist/server");
  server = app;
  return server;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const app = await getServer();

  const request = new Request(
    `http://${req.headers.host}${req.url}`,
    {
      method: req.method,
      headers: req.headers as any,
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
    }
  );

  const response = await app.fetch(request, {}, {});

  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  res.send(await response.text());
};
