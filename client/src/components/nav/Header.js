import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import "../nav/Header.css";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//////////////////////////////////////////////////

const { SubMenu, Item } = Menu;

//////////////////////////////////////////////////

const Header = () => {
  const [current, setCurrent] = useState("home");
  const dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));
  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  //////////////////////////////////////////////////

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    //////////////////////////////////////////////////

    history.push("/login");
  };

  //////////////////////////////////////////////////

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="right-side">
          <Link to="/login">Sign in</Link>
        </Item>
      )}

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="right-side">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          key="submenu2"
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="right-side-username"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history"> Dashboard</Link>
            </Item>
          )}
          {user && user.role === "admin" && (
            <Item> 
              <Link to="/admin/dashboard"> Dashboard</Link>
            </Item>
          )}
          <Item key="setting:3" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Header;
