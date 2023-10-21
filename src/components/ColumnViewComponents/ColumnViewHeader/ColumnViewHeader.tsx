import { Button, IconButton, Paper, Typography } from "@mui/material";
import * as React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useClickAway } from "@uidotdev/usehooks";
import { IColumnViewHeaderProps } from "../../../models/interfaces";

const MoreContainer = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "background.default",
        borderRadius: 3,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        width: 170,
        boxShadow: 6,
      }}>
      <Button
        variant="text"
        sx={{
          justifyContent: "flex-start",
          padding: "8px 0",
        }}
        startIcon={<EditNoteIcon sx={{ marginX: 2 }} />}>
        Delete
      </Button>
      <Button
        variant="text"
        sx={{
          justifyContent: "flex-start",
          padding: "8px 0",
        }}
        startIcon={<AddIcon sx={{ marginX: 2 }} />}>
        Delete
      </Button>
      <Button
        variant="text"
        sx={{
          justifyContent: "flex-start",
          padding: "8px 0",
        }}
        startIcon={<InboxIcon sx={{ marginX: 2 }} />}>
        Delete
      </Button>
      <Button
        variant="text"
        sx={{
          justifyContent: "flex-start",
          padding: "8px 0",
        }}
        startIcon={<DeleteOutlineIcon sx={{ marginX: 2 }} />}>
        Delete
      </Button>
    </Paper>
  );
};

export const ColumnViewHeader = ({
  label,
  color = "blue",
}: IColumnViewHeaderProps) => {
  const count = 3;
  const [viewMore, setViewMore] = React.useState(false);
  const MoreRef = useClickAway<HTMLDivElement>(() => {
    setViewMore(false);
  });

  return (
    <div className={`pt-1 bg-${color}-primary rounded-[30px] relative`}>
      <Paper
        sx={{
          backgroundColor: "background.default",
          boxShadow: 6,
          width: 1,
          height: 50,
          borderRadius: 25,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}>
        <div className="flex gap-2">
          <Typography fontSize={15} fontWeight={600} color="text.primary">
            {label}
            Hello
          </Typography>
          <Typography fontSize={15} color="text.primary">
            {count}
          </Typography>
        </div>
        <div>
          <IconButton size="small" onClick={() => setViewMore(true)}>
            <MoreHorizIcon />
          </IconButton>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </div>
      </Paper>
      <div
        className="absolute bottom-[-170px] flex flex-row-reverse w-full"
        ref={MoreRef}>
        {viewMore && MoreContainer()}
      </div>
    </div>
  );
};
