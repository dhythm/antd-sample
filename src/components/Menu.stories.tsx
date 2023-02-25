import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Menu, MenuTheme, Switch } from "antd";
import { MenuProps } from "rc-menu";
import { useState } from "react";

export default {
  title: "Components/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const Template: ComponentStory<typeof Menu> = () => {
  const [theme, setTheme] = useState<MenuTheme>("light");
  const [current, setCurrent] = useState("1");

  const changeTheme = (value: boolean) => {
    setTheme(value ? "dark" : "light");
  };
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export const $Menu = Template.bind({});
