import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AuthContainer, InputForm } from "../../../components";
import { useCustomSchema } from "../../../models/schemas";

export const Register = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");
  const schema = useCustomSchema("register");

  // Form Fields.
  const fields = [
    {
      name: "username",
      type: "text",
      label: t("username.label"),
      placeholder: t("username.placeholder"),
    },
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
    },
    {
      name: "confirmPassword",
      type: "password",
      label: t("confirmPassword.label"),
      placeholder: t("confirmPassword.placeholder"),
    },
    {
      name: "guidelines",
      type: "checkbox",
      label: t("guidelines.label"),
      placeholder: t("guidelines.placeholder"),
    },
  ];

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <AuthContainer header={t("auth.register")}>
      <InputForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        submitLabel={t("btn.signup")}
      />
    </AuthContainer>
  );
};
