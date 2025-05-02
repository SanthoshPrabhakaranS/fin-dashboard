import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-[1.5rem] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
