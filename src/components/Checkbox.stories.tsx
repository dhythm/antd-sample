import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox, Space } from "antd";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => {
  return (
    <Space direction="vertical">
      <Checkbox>Checkbox</Checkbox>
      <Checkbox disabled>Checkbox</Checkbox>
      <Checkbox checked>Checkbox</Checkbox>
      <Checkbox checked disabled>
        Checkbox
      </Checkbox>
      <Checkbox indeterminate>Checkbox</Checkbox>
      <Checkbox indeterminate disabled>
        Checkbox
      </Checkbox>
    </Space>
  );
};

export const $Checkbox = Template.bind({});
