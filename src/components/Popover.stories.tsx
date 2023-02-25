import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Popover } from "antd";

export default {
  title: "Components/Popover",
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => {
  return (
    <Popover
      content={
        <div>
          <p>Content</p>
          <p>Content</p>
        </div>
      }
      title="Title"
    >
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export const $Popover = Template.bind({});
