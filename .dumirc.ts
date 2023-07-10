import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'ui-docs',
  themeConfig: {
    name: 'Easy Design',
  },
  theme: {
    '@c-primary': 'rgb(5, 185, 116)',
  },
  // apiParser: {},
  // resolve: {
  //   entryFile: './src/index.ts',
  // },
});
