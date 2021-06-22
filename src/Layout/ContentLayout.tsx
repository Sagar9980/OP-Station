import React from "react";
import { Layout, Affix, Row, Col } from "antd";
import { AdminContainer } from "Container/AdminContainer";
import MenuBar from "Component/MenuBar/MenuBar";
import Logo from "Assets/Logo.png";

const { Header, Content } = Layout;
function ContentLayout(props: any) {
  return (
    <Layout>
      <Affix>
        <Header className="custom__header" style={{ background: "#000" }}>
          <AdminContainer>
            <Row justify="space-between">
              <Col>
                <img src={Logo} className="custom__header-logo" alt="" />
              </Col>
              <Col>
                <MenuBar />
              </Col>
            </Row>
          </AdminContainer>
        </Header>
      </Affix>
    </Layout>
  );
}

export default ContentLayout;
