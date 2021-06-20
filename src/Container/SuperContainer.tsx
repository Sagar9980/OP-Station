import ContentLayout from "Layout/ContentLayout";
import ProtectedRoute from "Routes/ProtectedRoute";

const SuperContainer = (props: any) => {
  return (
    <ContentLayout>
      <ProtectedRoute {...props} />
    </ContentLayout>
  );
};
export default SuperContainer;
