import { Col, Layout, Row } from "antd";
const { Content } = Layout;
export const AdminContainer = ({ children, ...rest }: any) => {
  return (
    <Content {...rest}>
      <Row justify="center">
        <Col xl={20} lg={22} md={22} sm={23} xs={23}>
          {children}
        </Col>
      </Row>
    </Content>
  );
};
