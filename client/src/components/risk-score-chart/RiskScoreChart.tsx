import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { CustomerType } from "../../types/types";
import { FC, useMemo } from "react";

interface RiskScoreChartProps {
  data: CustomerType[] | null;
}

const RiskScoreChart: FC<RiskScoreChartProps> = ({ data }) => {
  const riskScoreData = useMemo(() => {
    if (!data) return [];

    const scoreRanges = [
      { range: "300-349", min: 300, max: 349, color: "#FF6B6B" },
      { range: "350-499", min: 350, max: 499, color: "#FFD166" },
      { range: "500-649", min: 500, max: 649, color: "#06D6A0" },
      { range: "650-800", min: 650, max: 800, color: "#118AB2" },
    ];

    return scoreRanges.map((range) => {
      const count = data.filter(
        (customer) =>
          customer.creditScore >= range.min && customer.creditScore <= range.max
      ).length;

      return {
        range: range.range,
        count,
        color: range.color,
      };
    });
  }, [data]);

  return (
    <Card
      bodyStyle={{
        padding: 0,
      }}
      title="Risk Score Distribution"
    >
      <div className="h-[380px]">
        <ResponsiveContainer width="100%" height="100%">
          {riskScoreData.length ? (
            <BarChart
              data={riskScoreData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 60,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="range"
                label={{
                  value: "",
                  position: "insideBottom",
                  offset: -30,
                }}
              />
              <YAxis
                label={{
                  value: "NO. of Customers",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip labelFormatter={(label) => `Score Range: ${label}`} />
              <Legend />
              <Bar dataKey="count" name="Customers" fill="#8884d8">
                {riskScoreData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#999",
              }}
            >
              No data available
            </div>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RiskScoreChart;
