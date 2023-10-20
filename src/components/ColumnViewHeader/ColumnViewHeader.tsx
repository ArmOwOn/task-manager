import { Button, IconButton, Paper, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import InboxIcon from "@mui/icons-material/Inbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface IColumnViewHeader {
  color?: string;
  label?: string;
  onEdit?: () => void;
  onAdd?: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
}

export const ColumnViewHeader = ({
  color,
  label,
  onEdit,
  onAdd,
  onArchive,
  onDelete,
}: IColumnViewHeader) => {
  const count = 3;

  return (
    <div className="pt-1 bg-pink-primary rounded-[30px] relative">
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
          <IconButton size="small">
            <MoreHorizIcon />
          </IconButton>
          <IconButton size="small">
            <AddIcon />
          </IconButton>
        </div>
      </Paper>
      <div className="absolute left-0 bottom-[-170px]">
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
      </div>
    </div>
  );
};
