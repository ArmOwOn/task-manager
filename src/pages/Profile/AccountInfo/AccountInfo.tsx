import { useTranslation } from "react-i18next";
import { FieldValues } from "react-hook-form";
import { useCustomSchema } from "../../../models/schemas";
import { InputForm } from "../../../components";

export const AccountInfo = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");
  const schema = useCustomSchema("accountInfo");

  // Form submission handler
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // Form Fields.
  const fields = [
    {
      name: "username",
      type: "text",
      label: t("username.label"),
    },
    {
      name: "email",
      type: "text",
      label: t("email.label"),
    },
    {
      name: "password",
      type: "password",
      label: t("password.label"),
    },
    {
      name: "newPassword",
      type: "password",
      label: t("newPassword.label"),
    },
    {
      name: "confirmNewPassword",
      type: "password",
      label: t("confirmPassword.label"),
    },
  ];

  return (
    <div className="w-[400px]">
      <InputForm
        formTitle={t("btn.profile.accountInfo")}
        schema={schema}
        fields={fields}
        onSubmit={onSubmit}
        submitLabel={t("btn.saveChanges")}
      />
    </div>
  );
};
