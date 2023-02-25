import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from "@ant-design/colors";
import { UserOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Space } from "antd";

export default {
  title: "Components/Icon",
  component: UserOutlined,
} as ComponentMeta<typeof UserOutlined>;

const Template: ComponentStory<typeof UserOutlined> = () => {
  return (
    <Space direction="vertical">
      <UserOutlined style={{ color: "red" }} />
      <UserOutlined style={{ color: "blue" }} />
      <UserOutlined style={{ color: "green" }} />
      <UserOutlined style={{ fontSize: 24, color: red.primary }} />
      <UserOutlined style={{ fontSize: 24, color: volcano.primary }} />
      <UserOutlined style={{ fontSize: 24, color: gold.primary }} />
      <UserOutlined style={{ fontSize: 24, color: yellow.primary }} />
      <UserOutlined style={{ fontSize: 24, color: lime.primary }} />
      <UserOutlined style={{ fontSize: 24, color: green.primary }} />
      <UserOutlined style={{ fontSize: 24, color: blue.primary }} />
      <UserOutlined style={{ fontSize: 24, color: geekblue.primary }} />
      <UserOutlined style={{ fontSize: 24, color: purple.primary }} />
      <UserOutlined style={{ fontSize: 24, color: magenta.primary }} />
      <UserOutlined style={{ fontSize: 24, color: grey.primary }} />
    </Space>
  );
};

export const $Icon = Template.bind({});
