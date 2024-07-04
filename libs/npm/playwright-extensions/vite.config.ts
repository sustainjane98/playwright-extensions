/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import {
  default as packageJSON,
  version,
  main,
  module,
  entr,
} from './package.json';
import fs from 'fs';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/playwright-extensions',
  define: {
    __LIB_VERSION__: packageJSON.version,
  },
  plugins: [
    nxViteTsPaths(),
    dts({
      afterBuild: () => {
        const mainRes = main.replace('__LIB_VERSION__', version);
        const moduleRes = module.replace('__LIB_VERSION__', version);

        fs.writeFileSync(
          path.join(
            __dirname,
            '../../../dist/libs/playwright-extensions/package.json'
          ),
          JSON.stringify(
            { ...packageJSON, main: mainRes, module: moduleRes },
            null,
            2
          )
        );
      },
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: '../../../dist/libs/playwright-extensions',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'playwright-extensions',
      fileName: `index.${packageJSON.version}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        entryFileNames: `[name].${packageJSON.version}.js`,
        chunkFileNames: `[name].${packageJSON.version}.js`,
        assetFileNames: `[name].${packageJSON.version}.[ext]`,
      },
      // External packages that should not be bundled into your library.
      external: ['@playwright/test'],
    },
  },
});
