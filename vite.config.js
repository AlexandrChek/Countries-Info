import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import base from './base';

export default defineConfig({
  base,
  plugins: [react()],
});
