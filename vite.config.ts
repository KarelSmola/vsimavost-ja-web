import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const base = process.env.GITHUB_PAGES ? '/vsimavost-ja-web/' : '/';
  
  return {
    base,
    server: {
      host: "::",
      port: 3000,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: 'html-transform',
        transformIndexHtml(html: string) {
          // Replace favicon paths with base path (only if base is not root)
          if (base !== '/') {
            // Replace all favicon references
            html = html.replace(/href="\/favicon\.ico"/g, `href="${base}favicon.ico"`);
            html = html.replace(/href='\/favicon\.ico'/g, `href='${base}favicon.ico'`);
          }
          return html;
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
