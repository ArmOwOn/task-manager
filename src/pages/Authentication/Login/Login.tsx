import { useTranslation } from "react-i18next";
import { AuthContainer } from "../../../components";

export const Login = () => {
  const [t] = useTranslation("transolation");
  return (
    <>
      <AuthContainer header={t("auth.login")}>
        <h1>hello</h1>
      </AuthContainer>
    </>
  );
};
