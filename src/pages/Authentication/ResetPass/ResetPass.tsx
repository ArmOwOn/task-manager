import { FieldValues } from "react-hook-form";
import { AuthContainer, InputForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { useCustomSchema } from "../../../models/schemas";

export const ResetPass = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");
  const schema = useCustomSchema("resetPass");

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // Form Fields.
  const fields = [
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
  ];

  return (
    <AuthContainer header={t("auth.resetPass")}>
      <InputForm
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        submitLabel={t("btn.saveChanges")}
      />
    </AuthContainer>
  );
};
