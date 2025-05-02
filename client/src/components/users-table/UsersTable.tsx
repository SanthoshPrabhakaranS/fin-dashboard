import { FC } from "react";
import { CustomerType } from "../../types/types";
import { Table } from "antd";
import { getColumns } from "./columns";

interface UsersTableProps {
  data: CustomerType[];
  onClickDropdown: (status: string, cusId: string) => void;
}

const UsersTable: FC<UsersTableProps> = ({ data, onClickDropdown }) => {
  return (
    <div>
      <Table
        className="whitespace-nowrap"
        virtual
        dataSource={data}
        columns={getColumns({ onClickDropdown })}
      />
    </div>
  );
};

export default UsersTable;
