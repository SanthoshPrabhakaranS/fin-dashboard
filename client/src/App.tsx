import { ConfigProvider, Flex, Layout } from "antd";
import Header from "./components/header";
import { Outlet } from "react-router";
import { useGlobalContext } from "./components/context/GlobalContext";

function App() {
  const { appTheme } = useGlobalContext();

  return (
    <Flex vertical>
      <ConfigProvider theme={appTheme}>
        <Layout className="relative min-h-screen z-0">
          <Header />
          <Outlet />
        </Layout>
      </ConfigProvider>
    </Flex>
  );
}

export default App;
