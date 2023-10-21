import { ISimpleTagProps } from "../../../models/interfaces";
export const SimpleTag = ({ title, color }: ISimpleTagProps) => {
  return (
    <div
      className={`bg-${color}-secondary text-${color}-primary rounded-full px-2 flex w-fit`}>
      <p> {title} </p>
    </div>
  );
};
