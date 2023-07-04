import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@xiaoyaoliu/x-arco-design',
  },
  theme: {
    '@c-primary': 'rgb(5, 185, 116)',
  },
  // apiParser: {},
  // resolve: {
  //   entryFile: './src/index.ts',
  // },
});
