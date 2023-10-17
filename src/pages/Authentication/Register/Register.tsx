import { FieldValues } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { AuthContainer, InputForm } from "../../../components";

// Initialize the translation hook.
export const Register = () => {
  const [t] = useTranslation("translation");

  // Define validation schema using Zod.
  const schema = z
    .object({
      username: z
        .string()
        .min(3, t("username.error.length"))
        .regex(/^[a-zA-Z0-9_]+$/, t("username.error.invalid")),
      email: z.string().email(t("email.error.invalid")),
      password: z
        .string()
        .min(8, t("password.error.length"))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          t("password.error.invalid")
        ),
      confirmPassword: z.string(),
      guidelines: z.boolean().refine((value) => value === true, {
        message: t("guidelines.error.invalid"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("confirmPassword.error.invalid"),
      path: ["confirmPassword"],
    });

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
