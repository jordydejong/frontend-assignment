import { Meta, StoryObj } from "@storybook/react";
import Search from "../components/Search/Search";

const meta: Meta<typeof Search> = {
  component: Search,
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
};
