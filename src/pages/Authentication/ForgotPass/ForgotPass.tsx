import { Button, OutlinedInput } from "@mui/material";
import { IForgotPassFormData } from "../../../models/interfaces";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContainer } from "../../../components";
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

  // Set up the form using React Hook Form and Zod resolver.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassFormData>({
    resolver: zodResolver(schema),
  });

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    setIsSent(true);
    console.log(data);
  };

  return (
    <AuthContainer header={t("auth.forgotpass")}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {isSent ? (
          // Display a message when the form is submitted
          <div className="text-center"> {t("forgotpass")} </div>
        ) : (
          <>
            {/* Email Input */}
            <label
              htmlFor="email"
              className={`my-[3px] mt-3 font-bold cursor-pointer ${
                errors.email && "text-error-main"
              }`}>
              {t("email.placeholder")}
            </label>
            <OutlinedInput
              id="email"
              type="email"
              error={errors.email && true}
              placeholder={"batman@gmail.com"}
              {...register("email")}
            />
            {errors.email && (
              <div className="text-error-main">{errors.email.message}</div>
            )}

            {/* Submit Button */}
            <Button
              variant="contained"
              type="submit"
              size="large"
              sx={{ mt: 6 }}>
              {t("btn.send")}
            </Button>
          </>
        )}
      </form>
    </AuthContainer>
  );
};
