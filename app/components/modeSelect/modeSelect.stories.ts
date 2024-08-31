import type { Meta, StoryObj } from "@storybook/react";

import ModeSelect from "./modeSelect";

const meta = {
  title: "ModeSelect",
  component: ModeSelect,
  parameters: {},
  args: {},
} satisfies Meta<typeof ModeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicModeSelect: Story = {};
