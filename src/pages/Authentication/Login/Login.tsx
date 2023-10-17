import { FieldValues } from "react-hook-form";
import { AuthContainer, InputForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { useCustomSchema } from "../../../models/schemas";

export const Login = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");
  const schema = useCustomSchema("login");

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // Form Fields.
  const fields = [
    {
      name: "email",
      type: "text",
      label: t("email.label"),
      placeholder: t("email.placeholder"),
    },
    {
      name: "password",
      type: "password",
      label: t("password.label"),
      placeholder: t("password.placeholder"),
      link: {
        label: t("password.forgot"),
        to: "/authentication/forgotpass",
      },
    },
  ];

  return (
    <AuthContainer header={t("auth.login")}>
      <InputForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        submitLabel={t("btn.login")}
      />
    </AuthContainer>
  );
};
