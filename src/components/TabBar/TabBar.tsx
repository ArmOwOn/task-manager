import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button } from "@mui/material";
import { ITabPanelProps, ITabBarProps } from "../../models/interfaces";

function CustomTabPanel(props: ITabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}>
      {value === index && <div className="h-[90vh]">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabBar = ({
  listView,
  columnView,
  calendarView,
}: ITabBarProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
        <Typography fontSize={15} mx={3} color="text.primary">
          Project 1
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            icon={<FormatListBulletedIcon sx={{ marginX: 1 }} />}
            label="Item One"
            iconPosition="start"
            {...a11yProps(0)}
          />
          <Tab
            icon={<ViewWeekIcon sx={{ marginX: 1 }} />}
            label="Item Two"
            iconPosition="start"
            {...a11yProps(1)}
          />
          <Tab
            icon={<CalendarMonthIcon sx={{ marginX: 1 }} />}
            label="Item Three"
            iconPosition="start"
            {...a11yProps(2)}
          />
        </Tabs>
        <div className="flex flex-row-reverse items-center grow">
          <Button variant="outlined"> SHare </Button>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {listView}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {columnView}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {calendarView}
      </CustomTabPanel>
    </Box>
  );
};
