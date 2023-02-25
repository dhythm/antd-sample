import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Spin, Space, Alert } from "antd";

export default {
  title: "Components/Spin",
  component: Spin,
} as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Space>
        <Spin tip="Loading" size="small">
          <div
            style={{
              padding: 50,
              background: "rgba(0, 0, 0, 0.05)",
              borderRadius: 4,
            }}
          />
        </Spin>
        <Spin tip="Loading">
          <div
            style={{
              padding: 50,
              background: "rgba(0, 0, 0, 0.05)",
              borderRadius: 4,
            }}
          />
        </Spin>
        <Spin tip="Loading" size="large">
          <div
            style={{
              padding: 50,
              background: "rgba(0, 0, 0, 0.05)",
              borderRadius: 4,
            }}
          />
        </Spin>
      </Space>

      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  );
};

export const $Spin = Template.bind({});
