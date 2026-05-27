import type { VercelRequest, VercelResponse } from "@vercel/node";

let cachedHandler: any = null;

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // Import the server handler on first request
    if (!cachedHandler) {
      const { default: handler } = await import("../dist/server/index.js");
      cachedHandler = handler;
    }

    // Create a proper fetch request
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    const response = await cachedHandler.fetch(
      new Request(url.toString(), {
        method: req.method,
        headers: {
          ...req.headers,
          "x-forwarded-proto": req.headers["x-forwarded-proto"] || "https",
          "x-forwarded-host": req.headers.host || "",
        } as Record<string, string>,
        body:
          req.method !== "GET" && req.method !== "HEAD" && req.body
            ? typeof req.body === "string"
              ? req.body
              : JSON.stringify(req.body)
            : undefined,
      }),
      {},
      {}
    );

    // Forward response
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : String(error),
    });
  }
};

