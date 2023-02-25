import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfigProvider, Space, Typography } from "antd";

const { Text } = Typography;

export default {
  title: "Components/ConfigProvider",
  component: ConfigProvider,
} as ComponentMeta<typeof ConfigProvider>;

const Template: ComponentStory<typeof ConfigProvider> = (args) => (
  <ConfigProvider {...args}>
    <Space direction="vertical">
      <Text>Ant Design</Text>
      <Text type="secondary">Ant Design</Text>
      <Text type="success">Ant Design</Text>
      <Text type="warning">Ant Design</Text>
      <Text type="danger">Ant Design</Text>
    </Space>
  </ConfigProvider>
);

export const $ConfigProvider = Template.bind({});
