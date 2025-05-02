import { Button, Flex, Typography } from "antd";
import { FC } from "react";

interface ErrorContainerProps {
  text: string;
  refetchFunction: () => void;
}

const ErrorContainer: FC<ErrorContainerProps> = ({ refetchFunction, text }) => {
  return (
    <Flex className="flex justify-center items-center h-[100vh] flex-col gap-2">
      <Typography
        style={{
          fontSize: "20px",
        }}
      >
        {text}
      </Typography>
      <Button type="primary" onClick={refetchFunction}>
        Reload
      </Button>
    </Flex>
  );
};

export default ErrorContainer;
