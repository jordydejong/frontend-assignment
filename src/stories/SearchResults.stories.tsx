import { Meta, StoryObj } from "@storybook/react";
import SearchResults from "../components/Search/SearchResults";

const meta: Meta<typeof SearchResults> = {
  component: SearchResults,
};

export default meta;

type Story = StoryObj<typeof SearchResults>;

export const Default: Story = {
  args: {
    term: "foo",
    results: [],
  },
};
