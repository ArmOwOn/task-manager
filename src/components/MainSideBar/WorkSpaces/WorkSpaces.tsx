import { Button, IconButton, OutlinedInput } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SquareIcon from "@mui/icons-material/Square";
import { useTranslation } from "react-i18next";

export const WorkSpaces = () => {
  const [t] = useTranslation("transolation");

  return (
    <div className="w-full flex flex-col h-full">
      <Button
        variant="text"
        sx={{
          justifyContent: "space-between",
          fontWeight: 600,
          color: "text.primary",
        }}>
        {t("workSpaces.label")}
        <ArrowBackIosIcon fontSize="small" />
      </Button>
      <div className="flex flex-col relative overflow-hidden">
        <OutlinedInput
          placeholder={t("btn.search")}
          sx={{
            marginY: 2,
            paddingRight: "35px",
            height: 40,
            bachground: "text.secondary",
          }}
        />
        <div className="ab absolute right-[1px] top-[12px]">
          <IconButton aria-label="delete" size="large">
            <SearchIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          sx={{
            fontWeight: 600,
            color: "background.default",
            gap: 1,
          }}>
          <AddBoxIcon />
          {t("workSpaces.new")}
        </Button>
        <div className="my-2">
          <Button
            variant="text"
            className="group trantransition-opacity duration-500"
            sx={{
              width: 1,
              marginBottom: 1,
              justifyContent: "space-between",
              fontWeight: 600,
              color: "text.primary",
            }}>
            <div className="flex items-center">
              <SquareIcon fontSize="small" />
              {t("workSpaces.label")}
            </div>
            <MoreHorizIcon
              fontSize="small"
              className="opacity-0 trantransition-opacity duration-500 group-hover:opacity-100"
            />
          </Button>
          <div>
            <Button
              size="small"
              variant="outlined"
              className="group trantransition-opacity duration-500"
              sx={{
                width: 1,
                marginBottom: 1,
                fontWeight: 600,
              }}>
              {t("workSpace.makeNewProject")}
            </Button>

            <Button
              size="small"
              variant="text"
              className="group trantransition-opacity duration-500"
              sx={{
                width: 1,
                marginBottom: 1,
                justifyContent: "space-between",
                fontWeight: 600,
                color: "text.primary",
              }}>
              {t("workSpaces.label")}
              <MoreHorizIcon
                fontSize="small"
                className="opacity-0 trantransition-opacity duration-500 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
