import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "next-themes";

import "../app/globals.css";

import { withThemeByDataAttribute  } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: 'light',
          dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story, { globals }) => {
    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  },
  ],
  tags: ['autodocs'],
};

export default preview;
