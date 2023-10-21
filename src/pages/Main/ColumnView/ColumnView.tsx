import { ColumnViewHeader, ColumnViewTask } from "../../../components";

export const ColumnView = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-[270px] pt-3">
        <ColumnViewHeader />
        <div className="pt-3">
          <ColumnViewTask />
        </div>
      </div>
    </div>
  );
};
