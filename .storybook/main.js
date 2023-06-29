export default {
  framework: '@storybook/nextjs',
  stories: ['../src/**/*.mdx', '../src/stories/*.stories.tsx'],
  addons: [
    "@storybook/addon-essentials", 
    "@storybook/addon-interactions", 
    "@storybook/addon-links",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-styling"
  ],
  docs: {
    autodocs: true
  }
};