import { Space } from "antd";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <Space
      direction="vertical"
      className={`w-full max-w-[1400px] mx-auto flex px-[16px] md:px-[1.5rem] ${className}`}
    >
      {children}
    </Space>
  );
};

export default Container;
