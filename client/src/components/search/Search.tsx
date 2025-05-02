import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FC } from "react";

interface SearchProps {
  search: string;
  handleOnSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({ handleOnSearch, search }) => {
  return (
    <Input
      value={search}
      onChange={(e) => handleOnSearch(e.target.value)}
      size="large"
      placeholder="Search..."
      className="mb-[1rem]"
      prefix={<SearchOutlined className="text-xl" />}
    />
  );
};

export default Search;
