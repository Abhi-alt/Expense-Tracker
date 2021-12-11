import "./ChartBar.css";

const ChartBar = (props) => {
  let expenseHeight = "0%";
  if (props.maxValue > 0) {
    expenseHeight = Math.round((props.value / props.maxValue) * 100, 2) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: expenseHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.title}</div>
    </div>
  );
};

export default ChartBar;
