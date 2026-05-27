import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Dynamically import the server function
    const { default: handler } = await import("../dist/index.js");

    // Create a proper fetch request
    const url = new URL(
      req.url,
      `http://${req.headers.host}`
    );

    const response = await handler(
      new Request(url, {
        method: req.method,
        headers: req.headers as Record<string, string>,
        body:
          req.method !== "GET" && req.method !== "HEAD"
            ? JSON.stringify(req.body)
            : undefined,
      })
    );

    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.status(response.status);
    res.send(await response.text());
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error });
  }
};

