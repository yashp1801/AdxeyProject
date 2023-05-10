import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const SiteStatusDataGraph = ({ parametersData }) => {
  // Extract only the last_value data from the original data array
  const lastValues = parametersData?.map((item) => ({
    parameter: item.parameter,
    last_value: item.last_value,
  }));


  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={600} height={300} data={lastValues}>
        <XAxis dataKey="parameter" />
        {/*  Make MoonShine this is carzy adbd   */}
        <YAxis />
        <CartesianGrid stroke="#a9a9a938" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="last_value"
          stroke="#0088FE"
          fill="#0087fe3f"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SiteStatusDataGraph;
function newFunction() {
  return "Make a realtime data";
}

