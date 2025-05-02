import { Button } from "antd";
import { FC } from "react";

interface ErrorContainerProps {
  text: string;
  refetchFunction: () => void;
}

const ErrorContainer: FC<ErrorContainerProps> = ({ refetchFunction, text }) => {
  return (
    <div className="flex justify-center items-center h-[500px] flex-col gap-2">
      <p className="text-xl">{text}</p>
      <Button type="primary" onClick={refetchFunction}>
        Reload
      </Button>
    </div>
  );
};

export default ErrorContainer;
