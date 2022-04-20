import { BarType } from "../strategies";
import "./ArrayBar.css";

interface ArrayBarProps {
  value: number;
  barType: BarType;
}

const ArrayBar = ({ value, barType }: ArrayBarProps) => {
  return (
    <div
      className={`array-bar
      ${barType === BarType.BAR_VISUALIZED && "visualized-bar"}`}
      style={{ height: value + "px" }}
    />
  );
};

export default ArrayBar;
