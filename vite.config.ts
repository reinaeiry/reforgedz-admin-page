import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cloudflare-rocket-loader-optout',
      transformIndexHtml(html) {
        // Rocket Loader can break ES module scripts by rewriting their type.
        // Ensure module scripts are opted-out.
        return html.replace(
          /<script\b([^>]*\btype=("module"|'module')[^>]*)>/g,
          (full, attrs) => {
            if (/\bdata-cfasync\s*=/.test(attrs)) return full;
            return `<script${attrs} data-cfasync="false">`;
          },
        );
      },
    },
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
});
