import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Divider, Space } from "antd";

export default {
  title: "Components/Divider",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider dashed />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider plain>Text</Divider>
      <Space direction="horizontal">
        Text
        <Divider type="vertical" />
        Text
        <Divider type="vertical" />
        Text
        <Divider type="vertical" />
      </Space>
    </>
  );
};

export const $Divider = Template.bind({});
