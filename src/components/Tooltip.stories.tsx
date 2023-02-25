import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tooltip } from "antd";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = () => {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};

export const $Tooltip = Template.bind({});
