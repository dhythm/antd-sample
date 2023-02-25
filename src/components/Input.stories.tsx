import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input, Space } from "antd";

export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
  return (
    <Space direction="vertical">
      <Input size="small" placeholder="placeholder" />
      <Input size="middle" placeholder="placeholder" />
      <Input size="large" placeholder="placeholder" />
      <Input.Search enterButton />
      <Input.Search enterButton="Search" />
    </Space>
  );
};

export const $Input = Template.bind({});
