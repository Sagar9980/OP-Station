import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router";
import "./MenuBar.scss";

function MenuBar() {
  const history = useHistory();
  const onMenuClick = (value: any) => {
    history.push("/" + value.keyPath.reverse().join("/"));
  };
  return (
    <Menu
      theme="light"
      mode="horizontal"
      className="primary__menu"
      onClick={onMenuClick}
    >
      <Menu.Item key="home" title="Home">
        Home
      </Menu.Item>
      <Menu.Item key="tournaments" title="Tournaments">
        Tournaments
      </Menu.Item>
      <Menu.Item key="community" title="Community">
        Community
      </Menu.Item>
    </Menu>
  );
}

export default MenuBar;
