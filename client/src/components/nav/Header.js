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
import {Link} from 'react-router-dom'

import firebase from 'firebase'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'


const { SubMenu, Item } = Menu;

const Header = () => { 

  const [current, setCurrent] = useState("home");
  const dispatch = useDispatch();
  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };



 
const logout = () => {
firebase.auth().signOut()
dispatch({ 
  type: "LOGOUT",
  payload: null
}); 
 

history.push('/login')
}

 
  return (


    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="right-side">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>


      <Item key="register" icon={<UserAddOutlined />} className="right-side">
      <Link to="/register">Register</Link>
      </Item> 

      <Item key="login" icon={<UserOutlined />} className="right-side"> 
      <Link to="/login">Sign in</Link>
      </Item>


    
     

      <SubMenu key="submenu2"icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
        <Item key="setting:3" icon={<UserOutlined/>} onClick={logout}>Logout</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header; 