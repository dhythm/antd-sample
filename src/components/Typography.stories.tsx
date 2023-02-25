import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography, Space } from "antd";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const { Text, Title, Paragraph, Link } = Typography;

const Template: ComponentStory<typeof Typography> = () => {
  return (
    <Space direction="vertical">
      <Text>Ant Design</Text>
      <Text copyable>Ant Design</Text>
      <Text delete>Ant Design</Text>
      <Text disabled>Ant Design</Text>
      <Text editable>Ant Design</Text>
      <Text keyboard>Ant Design</Text>
      <Text mark>Ant Design</Text>
      <Text strong>Ant Design</Text>
      <Text italic>Ant Design</Text>
      <Text type="secondary">Ant Design</Text>
      <Text type="success">Ant Design</Text>
      <Text type="warning">Ant Design</Text>
      <Text type="danger">Ant Design</Text>
      <Text underline>Ant Design</Text>
    </Space>
  );
};

export const $Typography = Template.bind({});
