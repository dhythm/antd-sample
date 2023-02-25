import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Radio, Space } from "antd";

export default {
  title: "Components/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: true },
];

const Template: ComponentStory<typeof Radio> = () => {
  return (
    <Space direction="vertical">
      <Radio>Radio</Radio>
      <Radio disabled>Radio</Radio>
      <Radio checked>Radio</Radio>
      <Radio checked disabled>
        Radio
      </Radio>
      <Radio.Group options={options} value="Apple" />
      <Radio.Group options={options} optionType="button" value="Apple" />
      <Radio.Group
        options={options}
        optionType="button"
        buttonStyle="solid"
        value="Apple"
      />
    </Space>
  );
};

export const $Radio = Template.bind({});
