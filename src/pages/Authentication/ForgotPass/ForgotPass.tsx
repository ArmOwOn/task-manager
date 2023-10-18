import { FieldValues } from "react-hook-form";
import { AuthContainer, InputForm } from "../../../components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCustomSchema } from "../../../models/schemas";
import { Typography } from "@mui/material";

export const ForgotPass = () => {
  // Initialize necessary hooks and variables
  const [isSent, setIsSent] = useState(false);
  const [t] = useTranslation("translation");
  const schema = useCustomSchema("email");

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
        <div className="text-center">
          {" "}
          <Typography fontSize={15} color="text.primary">
            {t("forgotPass")}
          </Typography>
        </div>
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
