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
import { Col, Divider, Row, Space, theme, Typography } from "antd";
import { CSSProperties, FC } from "react";

export default {
  title: "Theme",
} as Meta;

const { useToken } = theme;

const Template: Story = () => {
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

export const $Theme = Template.bind({});
