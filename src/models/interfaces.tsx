export interface IAuthContainerProp {
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
