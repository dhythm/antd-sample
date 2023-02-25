// import {
//   red,
//   volcano,
//   gold,
//   yellow,
//   lime,
//   green,
//   cyan,
//   blue,
//   geekblue,
//   purple,
//   magenta,
//   grey,
// } from "@ant-design/colors";
import { ConfigProvider } from "antd";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ConfigProvider theme={{ token: { colorPrimary: "#16828b" } }}>
      <Story />
    </ConfigProvider>
  ),
];
