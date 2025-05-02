import { CustomerType } from "../../types/types";
import { DownOutlined } from "@ant-design/icons";
import { Badge, Dropdown, Space } from "antd";
import { STATUS } from "../../constants/constants";
import { calculateRiskScore } from "../utils/creditRiskCalculation.utils";

interface ColumnsProps {
  onClickDropdown: (status: string, cusId: string) => void;
}

export const getColumns = ({ onClickDropdown }: ColumnsProps) => [
  {
    title: "Customer ID",
    dataIndex: "customerId",
    key: "customerId",
    sorter: (a: { customerId: string }, b: { customerId: string }) => {
      const numA = parseInt(a.customerId.replace(/\D/g, ""), 10);
      const numB = parseInt(b.customerId.replace(/\D/g, ""), 10);
      return numA - numB;
    },
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Monthly Income",
    dataIndex: "monthlyIncome",
    key: "monthlyIncome",
    render: (value: number) => `₹${value.toLocaleString()}`,
    sorter: (a: { monthlyIncome: number }, b: { monthlyIncome: number }) => {
      return a.monthlyIncome - b.monthlyIncome;
    },
  },
  {
    title: "Monthly Expenses",
    dataIndex: "monthlyExpenses",
    key: "monthlyExpenses",
    render: (value: number) => `₹${value.toLocaleString()}`,
    sorter: (
      a: { monthlyExpenses: number },
      b: { monthlyExpenses: number }
    ) => {
      return a.monthlyExpenses - b.monthlyExpenses;
    },
  },
  {
    title: "Credit Score",
    dataIndex: "creditScore",
    key: "creditScore",
    sorter: {
      compare: (a: { creditScore: number }, b: { creditScore: number }) =>
        a.creditScore - b.creditScore,
    },
  },
  {
    title: "Outstanding Loans",
    dataIndex: "outstandingLoans",
    key: "outstandingLoans",
    render: (value: number) => `₹${value.toLocaleString()}`,
    sorter: (
      a: { outstandingLoans: number },
      b: { outstandingLoans: number }
    ) => {
      return a.outstandingLoans - b.outstandingLoans;
    },
  },
  {
    title: "Account Balance",
    dataIndex: "accountBalance",
    key: "accountBalance",
    render: (value: number) => `₹${value.toLocaleString()}`,
    sorter: (a: { accountBalance: number }, b: { accountBalance: number }) => {
      return a.accountBalance - b.accountBalance;
    },
  },
  {
    title: "Credit Risk",
    render: (_: CustomerType, record: CustomerType) => {
      const score = calculateRiskScore(record);
      return (
        <div>
          <Badge color={score > 70 ? "green" : "red"} count={score} />
        </div>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_: CustomerType, record: CustomerType) => (
      <Dropdown
        className={`${
          record.status === "Approved"
            ? "bg-green-200 text-green-800"
            : record.status === "Rejected"
            ? "bg-red-200 text-red-800"
            : "bg-yellow-200 text-yellow-800"
        } px-3 pt-1 pb-2 rounded-[5px] text-sm font-semibold cursor-pointer`}
        menu={{
          items: STATUS.map((item) => ({
            ...item,
            onClick: () =>
              onClickDropdown(item.label as string, record.customerId),
          })),
        }}
      >
        <Space>
          {record.status}
          <DownOutlined />
        </Space>
      </Dropdown>
    ),
  },
];
