import { ColumnView } from "..";
import { TabBar, MainSideBar, Background } from "../../../components";

export const MainLayout = () => {
  return (
    <>
      <Background />
      <MainSideBar>
        <TabBar
          listView={<ColumnView />}
          columnView={<div className="bg-blue-primary w-full h-full" />}
          calendarView={<div className="bg-green-primary w-full h-full" />}
        />
      </MainSideBar>
    </>
  );
};
