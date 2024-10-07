import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/defaultTextField/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "아이콘 이미지의 경로",
      defaultValue: "",
    },
    onIconClick: {
      action: "clicked",
      description: "아이콘 버튼 클릭 이벤트",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태 여부",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "./close.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    onIconClick: () => {}, // 추가된 부분: 기본 클릭 이벤트 핸들러
    onChange: () => {}, // 추가된 부분: 기본 텍스트 변경 이벤트 핸들러
    isError: false,
  },
};
