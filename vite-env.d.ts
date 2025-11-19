/// <reference types="vite/client" />

// Декларация для vite-plugin-handlebars (чтобы TS знал о модуле)
declare module "vite-plugin-handlebars" {
  import type { Plugin } from "vite";
  interface HandlebarsOptions {
    // Опции плагина (по умолчанию пусто, но можно расширить)
    context?: Record<string, any>;
    // ... другие опции, если используешь
  }
  function handlebars(options?: HandlebarsOptions): Plugin;
  export default handlebars;
}
