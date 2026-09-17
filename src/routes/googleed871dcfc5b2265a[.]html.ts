import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/googleed871dcfc5b2265a.html")({
  server: {
    handlers: {
      GET: async () => {
        return new Response("google-site-verification: googleed871dcfc5b2265a.html", {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
