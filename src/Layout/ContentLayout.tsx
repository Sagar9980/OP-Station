import React from "react";
import { Layout, Affix, Row, Col, Avatar } from "antd";
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
              <Col style={{display:"flex", alignItems:"center"}}>
                <MenuBar />
                <Avatar style={{cursor:"pointer"}} size="large" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              </Col>
              {/* <Col lg={6}>
                <Avatar size="large" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
              </Col> */}
            </Row>
          </AdminContainer>
        </Header>
      </Affix>
    </Layout>
  );
}

export default ContentLayout;
