import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const max = Math.max(...props.dataPoints.map((x) => x.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={max}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
