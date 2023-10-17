import { FieldValues } from "react-hook-form";
import { AuthContainer, InputForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const Login = () => {
  // Initialize the translation hook.
  const [t] = useTranslation("translation");

  // Define validation schema using Zod.
  const schema = z.object({
    email: z.string().email(t("email.error.invalid")),
    password: z
      .string()
      .min(8, t("password.error.length"))
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, t("password.error.invalid")),
  });

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
