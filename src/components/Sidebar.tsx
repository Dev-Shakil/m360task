import {
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
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

const items: MenuProps["items"] = [


  getItem(
    "PAGES",
    "grp",
    null,
    [getItem(<Link to="/dashboard" className="!text-[#A7AFBC] "> <AppstoreOutlined className="mr-3" />Dashboard</Link>, "13"), getItem(<Link to="/users" className="!text-[#A7AFBC]"><UserOutlined className="mr-3" />Users</Link>, "14"),getItem(<Link to="/sales" className="!text-[#A7AFBC]"><UserOutlined className="mr-3" />Sales</Link>, "15")],
    "group"
  ),
];
const Sidebar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <>
    <div className="font-bold flex justify-center gap-x-4 cursor-pointer py-5 text-2xl text-[#4E5D78] border-r"><img src="./Paper-Stack.png"  alt="logo" />Stack</div>
      <Menu
        onClick={onClick}
        style={{ width: 230 }}
        mode="inline"
        items={items}
        className="h-full"
      />
    </>
  );
};

export default Sidebar;
