import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    handlebars({
      //@ts-ignore
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        username: "John",
        label: "knopka",
      },
    }),
  ],
});
