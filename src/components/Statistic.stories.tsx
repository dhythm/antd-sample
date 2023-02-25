import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Statistic, Row, Col, Card, Divider, Space } from "antd";
import CountUp from "react-countup";

export default {
  title: "Components/Statistic",
  component: Statistic,
} as ComponentMeta<typeof Statistic>;

const formatter = (value: number) => <CountUp end={value} separator="," />;

const Template: ComponentStory<typeof Statistic> = () => {
  return (
    <Space style={{ width: 480 }} direction="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Active Users"
            value={112893}
            formatter={formatter}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
            formatter={formatter}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export const $Statistic = Template.bind({});
