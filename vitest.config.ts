/// <reference types="vitest" />

import { defineConfig } from 'vitest/dist/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
