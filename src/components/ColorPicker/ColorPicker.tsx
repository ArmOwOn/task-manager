import * as React from "react";
import { Radio } from "@mui/material";
import { IColorPicker } from "../../models/interfaces";

export const ColorPicker = ({ selectedColor }: IColorPicker) => {
  // Initialize necessary hooks and variables
  const [selectedValue, setSelectedValue] = React.useState("brand");
  const themeColors = [
    {
      id: "red",
      hex: "#fa5252",
    },
    {
      id: "pink",
      hex: "#e64980",
    },
    {
      id: "grape",
      hex: "#be4bdb",
    },
    {
      id: "violet",
      hex: "#7950f2",
    },
    {
      id: "indigo",
      hex: "#4c6ef5",
    },
    {
      id: "blue",
      hex: "#228be6",
    },
    {
      id: "cyan",
      hex: "#15aabf",
    },
    {
      id: "teal",
      hex: "#12b886",
    },
    {
      id: "brand",
      hex: "#208d8e",
    },
    {
      id: "green",
      hex: "#40c057",
    },
    {
      id: "lime",
      hex: "#82c91e",
    },
    {
      id: "yellow",
      hex: "#fab005",
    },
    {
      id: "orange",
      hex: "#fd7e14",
    },
  ];

  // Function for handling the theme change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    selectedColor(event.target.value);
  };
  // Function for dealing with radio input props
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      {themeColors.map((color) => (
        <Radio
          key={color.id}
          {...controlProps(color.id)}
          sx={{
            color: color.hex,
            "&.Mui-checked": {
              color: color.hex,
            },
          }}
        />
      ))}
    </div>
  );
};
