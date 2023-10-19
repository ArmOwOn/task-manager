import { TabBar, MainSideBar } from "../../../components";

export const MainLayout = () => {
  return (
    <MainSideBar>
      <TabBar
        listView={<div className="bg-red-primary w-full h-full " />}
        columnView={<div className="bg-blue-primary w-full h-full" />}
        calendarView={<div className="bg-green-primary w-full h-full" />}
      />
    </MainSideBar>
  );
};
