import { Flex, Layout } from "antd";
import Header from "./components/header";
import { Outlet } from "react-router";

function App() {
  return (
    <Flex vertical>
      <Layout className="relative min-h-screen z-0">
        <Header />
        <Outlet />
      </Layout>
    </Flex>
  );
}

export default App;
