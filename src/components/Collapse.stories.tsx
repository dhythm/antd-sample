import { action } from "@storybook/addon-actions";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Collapse } from "antd";

export default {
  title: "Components/Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Template: ComponentStory<typeof Collapse> = () => {
  return (
    <Collapse defaultActiveKey={["1"]} onChange={action("onChange")}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export const $Collapse = Template.bind({});
