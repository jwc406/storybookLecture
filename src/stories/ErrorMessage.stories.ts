import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const meta = {
  title: "Text/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "errorMessage의 내용" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지",
  },
};
