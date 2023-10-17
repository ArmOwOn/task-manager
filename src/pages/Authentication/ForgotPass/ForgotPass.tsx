import { FieldValues } from "react-hook-form";
import { AuthContainer, InputForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { useState } from "react";

export const ForgotPass = () => {
  // State for tracking whether the form is submitted
  const [isSent, setIsSent] = useState(false);

  // Initialize the translation hook.
  const [t] = useTranslation("translation");

  // Define validation schema using Zod.
  const schema = z.object({
    email: z.string().email(t("email.error.invalid")),
  });

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    setIsSent(true);
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
  ];

  return (
    <AuthContainer header={t("auth.forgotPass")}>
      {isSent ? (
        // Display a message when the form is submitted
        <div className="text-center"> {t("forgotPass")} </div>
      ) : (
        <>
          <InputForm
            schema={schema}
            fields={fields}
            onSubmit={onSubmit}
            submitLabel={t("btn.send")}
          />
        </>
      )}
    </AuthContainer>
  );
};
