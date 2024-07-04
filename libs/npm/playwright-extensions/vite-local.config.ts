/// <reference types='vitest' />
import { UserConfig, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { default as config } from './vite.config';

export default defineConfig({
  root: __dirname,
  ...config,
  cacheDir: '../../node_modules/.vite/local/playwright-extensions',

  build: {
    outDir: '../../../dist/libs/npm/playwright-extensions',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    ...((config as UserConfig)?.build ?? []),
    sourcemap: true,
  },
});
