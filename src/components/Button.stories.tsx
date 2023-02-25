import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Space } from "antd";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => {
  return (
    <Space direction="vertical">
      <Button>Ant Design</Button>
      <Button type="primary">Ant Design</Button>
      <Button type="primary" disabled>
        Ant Design
      </Button>
      <Button type="primary" loading>
        Ant Design
      </Button>
      <Button type="ghost">Ant Design</Button>
      <Button type="dashed">Ant Design</Button>
      <Button type="link">Ant Design</Button>
      <Button type="text">Ant Design</Button>
      <Button danger>Ant Design</Button>
    </Space>
  );
};

export const $Button = Template.bind({});
