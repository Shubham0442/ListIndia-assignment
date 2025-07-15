import { GiEmptyHourglass } from "react-icons/gi";

const NoData = ({ noDataText = "No Data Available" }) => {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col">
      <GiEmptyHourglass />
      <h4>{noDataText}</h4>
    </div>
  );
};

export default NoData;
