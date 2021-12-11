import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let datapoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const maxValue = Math.max(...props.data.map((e) => e.amount));
  for (const expense of props.data) {
    const month = expense.date.getMonth();
    datapoints[month].value += expense.amount;
  }
  return (
    <div className="chart">
      {datapoints.map((e) => {
        return (
          <ChartBar
            key={e.label}
            title={e.label}
            value={e.value}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
