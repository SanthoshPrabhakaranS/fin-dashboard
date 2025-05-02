import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
      <Spin size={"large"} />
    </div>
  );
};

export default Loader;
