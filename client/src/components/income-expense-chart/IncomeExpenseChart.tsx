import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CustomerType } from "../../types/types";
import { FC, useMemo } from "react";

interface IncomeExpenseChartProps {
  data: CustomerType[] | null;
}

const IncomeExpenseChart: FC<IncomeExpenseChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    if (!data) return [];
    return data.map((item) => ({
      name: item.name.split(" ")[0],
      monthlyIncome: item.monthlyIncome,
      monthlyExpenses: item.monthlyExpenses,
      customerId: item.customerId,
    }));
  }, [data]);

  const formatTooltip = (value: number, name: string) => {
    return [
      `₹${value.toLocaleString()}`,
      name === "monthlyIncome" ? "Income" : "Expenses",
    ];
  };

  return (
    <Card
      styles={{
        body: {
          padding: 0,
        },
      }}
      title="Income and Expense"
    >
      <div className="h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          {chartData?.length ? (
            <LineChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                height={70}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                label={{
                  value: "Amount (₹)",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                }}
              />
              <Tooltip
                formatter={formatTooltip}
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="monthlyIncome"
                stroke="#4CAF50"
                strokeWidth={2}
                activeDot={{ r: 8 }}
                name="Monthly Income"
              />
              <Line
                type="monotone"
                dataKey="monthlyExpenses"
                stroke="#F44336"
                strokeWidth={2}
                name="Monthly Expenses"
              />
            </LineChart>
          ) : (
            <div className="flex justify-center items-center">
              No data available
            </div>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default IncomeExpenseChart;
