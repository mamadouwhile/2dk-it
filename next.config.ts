import type { NextConfig } from "next";

function buildContentSecurityPolicy() {
  const isDevelopment = process.env.NODE_ENV !== "production";

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
    "connect-src 'self'",
  ].join("; ");
}

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Content-Security-Policy",
            value: buildContentSecurityPolicy(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
