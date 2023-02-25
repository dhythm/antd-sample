import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Breadcrumb } from "antd";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export const $Breadcrumb = Template.bind({});
