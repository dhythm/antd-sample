import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagination } from "antd";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = () => {
  return <Pagination defaultCurrent={1} total={50} />;
};

export const $Pagination = Template.bind({});
