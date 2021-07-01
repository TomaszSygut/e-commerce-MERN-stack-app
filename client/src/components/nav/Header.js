import React, { useState } from "react";
import 'antd/dist/antd.css'
import { Menu } from "antd";
import "../nav/Header.css"
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;


const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
 
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="right-side">
      <Item key="home" icon={<AppstoreOutlined />}>
        Home
      </Item>


      <Item key="register" icon={<UserAddOutlined />} className="right-side">
        Register 
      </Item> 
      <Item key="login" icon={<UserOutlined />} className="xxx"> 
        Login
      </Item>


    
     

      <SubMenu icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header; 