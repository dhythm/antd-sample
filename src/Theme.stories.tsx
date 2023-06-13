import {
  red,
  volcano,
  gold,
  yellow,
  lime,
  green,
  blue,
  geekblue,
  purple,
  magenta,
  grey,
} from "@ant-design/colors";
import { Meta, Story } from "@storybook/react";
import {
  Col,
  ConfigProvider,
  Divider,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import { CSSProperties, FC } from "react";

interface Props {
  colorPrimary: string;
  colorSuccess: string;
  colorWarning: string;
  colorError: string;
  colorInfo: string;
}

export default {
  title: "Theme/Theme",
  argTypes: {
    colorPrimary: {
      defaultValue: "#248464",
      control: { type: "color" },
    },
    colorSuccess: {
      defaultValue: "#52c41a",
      control: { type: "color" },
    },
    colorWarning: {
      defaultValue: "#faad14",
      control: { type: "color" },
    },
    colorError: {
      defaultValue: "#ff4d4f",
      control: { type: "color" },
    },
    colorInfo: {
      defaultValue: "#1677ff",
      control: { type: "color" },
    },
  },
} as Meta<Props>;

const { useToken } = theme;

// https://ant.design/docs/spec/colors#palette-generation-tool
const Template: Story<Props> = (args) => {
  const { colorPrimary, colorSuccess, colorWarning, colorError, colorInfo } =
    args;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary,
          colorSuccess,
          colorWarning,
          colorError,
          colorInfo,
        },
      }}
    >
      <Component />
    </ConfigProvider>
  );
};

const Component = () => {
  const { token } = useToken();
  const colorTokens = Object.entries(token).flatMap(([key, value]) =>
    key.startsWith("color") ? (
      <div
        style={{
          width: 300,
          backgroundColor: value,
        }}
      >
        <Row justify="space-between">
          <Col>
            <Typography.Text>{key}</Typography.Text>
          </Col>
          <Col>
            <Typography.Text>{value}</Typography.Text>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <Typography.Text style={{ color: "#fff" }}>{key}</Typography.Text>
          </Col>
          <Col>
            <Typography.Text style={{ color: "#fff" }}>{value}</Typography.Text>
          </Col>
        </Row>
      </div>
    ) : (
      []
    )
  );

  return (
    <Space direction="vertical">
      <Divider plain>Token</Divider>
      <Space wrap>{colorTokens}</Space>
      <Divider plain>Colors</Divider>
      <Space wrap>
        {red.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {volcano.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {gold.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {yellow.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {lime.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {green.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {blue.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {geekblue.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {purple.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {magenta.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
      </Space>
      <Space wrap>
        {grey.map((v, i) => (
          <Box key={i} bgColor={v} />
        ))}
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
