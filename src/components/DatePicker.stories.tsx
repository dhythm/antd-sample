import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DatePicker, Space } from "antd";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => {
  return (
    <>
      <Space direction="vertical">
        <DatePicker onChange={action("onChange")} />
        <DatePicker onChange={action("onChange")} picker="week" />
        <DatePicker onChange={action("onChange")} picker="month" />
        <DatePicker onChange={action("onChange")} picker="quarter" />
        <DatePicker onChange={action("onChange")} picker="year" />
        <DatePicker.RangePicker />
        <DatePicker.RangePicker showTime />
        <DatePicker.RangePicker picker="week" />
        <DatePicker.RangePicker picker="month" />
        <DatePicker.RangePicker picker="quarter" />
        <DatePicker.RangePicker picker="year" />
      </Space>
    </>
  );
};

export const $DatePicker = Template.bind({});
