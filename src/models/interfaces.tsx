import { FieldValues, SubmitHandler } from "react-hook-form";

export interface IFormField {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  link?: {
    label: string;
    to: string;
  };
}

export interface IInputFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any;
  onSubmit: SubmitHandler<FieldValues>;
  fields: IFormField[];
  formTitle?: string;
  submitLabel: string;
}

export interface IAuthContainerProps {
  header: string;
  children: React.ReactNode;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  guidelines: boolean;
}

export interface IForgotPassFormData {
  email: string;
}

export interface IResetPassFormData {
  password: string;
  confirmPassword: string;
}
export interface IUserInfoFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IAccountInfoFormData {
  username: string;
  email: string;
  password: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IProfileSideBarProps {
  children: React.ReactNode;
  selectedPage: (data: "userInfo" | "accountInfo" | "accountSetting") => void;
}

export interface IColorPicker {
  selectedColor: (color: string) => void;
}

export type IThemes =
  | "blueLight"
  | "redLight"
  | "pinkLight"
  | "grapeLight"
  | "violetLight"
  | "indigoLight"
  | "cyanLight"
  | "tealLight"
  | "brandLight"
  | "greenLight"
  | "yellowLight"
  | "limeLight"
  | "orangeLight"
  | "blueDark"
  | "redDark"
  | "pinkDark"
  | "grapeDark"
  | "violetDark"
  | "indigoDark"
  | "cyanDark"
  | "tealDark"
  | "brandDark"
  | "greenDark"
  | "yellowDark"
  | "limeDark"
  | "orangeDark";

export interface IThemeChangerState {
  themeChanger: {
    theme: IThemes;
  };
}

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ITabBarProps {
  listView: React.ReactNode;
  columnView: React.ReactNode;
  calendarView: React.ReactNode;
}

export interface IColumnViewHeader {
  color?: string;
  label?: string;
  onEdit?: () => void;
  onAdd?: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
}
