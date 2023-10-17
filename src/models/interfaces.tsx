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
  selectedPage: (data: "userinfo" | "accountinfo" | "accountsetting") => void;
}
