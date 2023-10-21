import { Paper, Typography, Avatar } from "@mui/material";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import { SimpleTag } from "../../Tags";

export const ColumnViewTask = () => {

  return (
    <Paper
      sx={{
        width: 1,
        backgroundColor: "background.default",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: 2,
        boxShadow: 6,
      }}>
      <img
        src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=996&t=st=1697796629~exp=1697797229~hmac=95d1f218f1c9f523db7bc0bae3bbe374194a9104e166803abdfac789042df635"
        loading="lazy"
        className="w-full h-[130px] rounded-md object-cover"
      />
      <div className="flex justify-between my-3 items-center">
        <Typography fontSize={18} fontWeight={600} color="text.primary">
          Hello
        </Typography>
        <Avatar sx={{ width: 25, height: 25 }} />
      </div>
      <Typography fontSize={15} color="text.primary">
        asjkdbasj asjdakjsda asj aksjdakjs djasd kasdjhabsd ajsdhaisudq qoiwud
        qoiweqoiwe qowen
      </Typography>
      <div className="flex gap-1">
        <AssistantPhotoIcon className="text-red-primary" />
        <Typography fontSize={17} fontWeight={600} color="text.primary">
          2/2/2022
        </Typography>
      </div>
      <div>
        <SimpleTag color="yellow" title="test" />
      </div>
    </Paper>
  );
};
