import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select, Space } from "antd";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
  return (
    <Space direction="vertical">
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={action("onChange")}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        disabled
        options={[{ value: "lucy", label: "Lucy" }]}
      />
    </Space>
  );
};

export const $Select = Template.bind({});
