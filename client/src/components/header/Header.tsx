import { Flex, Typography } from "antd";
import Container from "../container";
import ThemeToggle from "../theme-toggle";

const Header = () => {
  return (
    <Flex className="h-[60px] sticky top-0 z-20 w-full flex items-center bg-blue-900 text-white">
      <Container>
        <Flex justify="space-between">
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "white",
            }}
          >
            Dashboard
          </Typography>

          <ThemeToggle />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
