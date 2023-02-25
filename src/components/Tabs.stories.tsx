import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tabs } from "antd";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          label: "Tab 1",
          key: "1",
          children: "Tab 1",
        },
        {
          label: "Tab 2",
          key: "2",
          children: "Tab 2",
          disabled: true,
        },
        {
          label: "Tab 3",
          key: "3",
          children: "Tab 3",
        },
      ]}
    />
  );
};

export const $Tabs = Template.bind({});
