import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Cascader } from "antd";

export default {
  title: "Components/Cascader",
  component: Cascader,
} as ComponentMeta<typeof Cascader>;

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const onChange = (value: string[]) => {
  console.log(value);
};

const Template: ComponentStory<typeof Cascader> = () => {
  return (
    <Cascader
      defaultValue={["zhejiang", "hangzhou", "xihu"]}
      options={options}
      onChange={onChange}
    />
  );
};

export const $Cascader = Template.bind({});
