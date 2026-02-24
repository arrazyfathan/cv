try {
  const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");
  initOpenNextCloudflareForDev();
} catch (error) {
  // Allow installs/builds to proceed before Cloudflare dev dependencies are installed.
  if (error && error.code !== "MODULE_NOT_FOUND") {
    throw error;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
