import { DownOutlined } from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge, Dropdown, Space, Table, TableColumnsType } from "antd";
import { ColumnsType } from "antd/es/table";

export default {
  title: "Components/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => {
  return (
    <>
      <FixedTable />
      <ExpandedTable />
    </>
  );
};

const FixedTable = () => {
  const columns: ColumnsType<{
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }> = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
    },
    {
      title: "Column 6",
      dataIndex: "address",
      key: "6",
      width: 150,
    },
    {
      title: "Column 7",
      dataIndex: "address",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a>action</a>,
    },
  ];

  const data = [...Array(100)].map((_, i) => ({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  }));

  return (
    <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
  );
};

const ExpandedTable = () => {
  const items = [
    { key: "1", label: "Action 1" },
    { key: "2", label: "Action 2" },
  ];

  const columns: TableColumnsType<{
    key: React.Key;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number;
    creator: string;
    createdAt: string;
  }> = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Platform", dataIndex: "platform", key: "platform" },
    { title: "Version", dataIndex: "version", key: "version" },
    { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
    { title: "Creator", dataIndex: "creator", key: "creator" },
    { title: "Date", dataIndex: "createdAt", key: "createdAt" },
    { title: "Action", key: "operation", render: () => <a>Publish</a> },
  ];

  const expandedRowRender = () => {
    const columns: TableColumnsType<{
      key: React.Key;
      date: string;
      name: string;
      upgradeNum: string;
    }> = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Name", dataIndex: "name", key: "name" },
      {
        title: "Status",
        key: "state",
        render: () => <Badge status="success" text="Finished" />,
      },
      { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
      {
        title: "Action",
        dataIndex: "operation",
        key: "operation",
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown menu={{ items }}>
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];
    const data = [...Array(3)].map((_, i) => ({
      key: i.toString(),
      date: "2014-12-24 23:12:00",
      name: "This is production name",
      upgradeNum: "Upgraded: 56",
    }));

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const data = [...Array(5)].map((_, i) => ({
    key: i.toString(),
    name: "Screen",
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    createdAt: "2014-12-24 23:12:00",
  }));

  return (
    <>
      <Table
        columns={columns}
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ["0"] }}
        dataSource={data}
      />
    </>
  );
};

export const $Table = Template.bind({});
