import {
  generate,
  presetPalettes,
  presetDarkPalettes,
} from "@ant-design/colors";
import { Meta, Story } from "@storybook/react";
import { ConfigProvider, Divider, Space, Typography } from "antd";
import { CSSProperties, FC } from "react";

export default {
  title: "Theme/Colors",
} as Meta;

// https://ant.design/docs/spec/colors#palette-generation-tool
const Template: Story = () => {
  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <Component />
    </ConfigProvider>
  );
};

const Component = () => {
  return (
    <Space direction="vertical">
      <Divider plain>presetPalettes</Divider>
      {Object.entries(presetPalettes).map(([color, palette]) => (
        <Space key={color} wrap>
          <Typography style={{ width: 60 }}>{color}</Typography>
          {palette.map((v, i) => (
            <Box key={i} bgColor={v} />
          ))}
        </Space>
      ))}

      <Divider plain>presetDarkPalettes</Divider>
      {Object.entries(presetDarkPalettes).map(([color, palette]) => (
        <Space key={color} wrap>
          <Typography style={{ width: 60 }}>{color}</Typography>
          {palette.map((v, i) => (
            <Box key={i} bgColor={v} />
          ))}
        </Space>
      ))}

      <Divider plain></Divider>
      <Space wrap>
        <Typography style={{ width: 60 }}>#1890ff</Typography>
        {generate("#1890ff").map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        <Typography style={{ width: 60 }}>#1890ff</Typography>
        {generate("#1890ff", { theme: "dark", backgroundColor: "#141414" }).map(
          (v, i) => (
            <Box key={i} bgColor={v} />
          )
        )}
      </Space>
    </Space>
  );
};

const Box: FC<{ bgColor: CSSProperties["backgroundColor"] }> = ({
  bgColor,
}) => {
  return <div style={{ width: 30, height: 30, backgroundColor: bgColor }} />;
};

export const Default = Template.bind({});
