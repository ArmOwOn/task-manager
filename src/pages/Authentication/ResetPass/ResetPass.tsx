import { Button, OutlinedInput } from "@mui/material";
import { IRegisterFormData } from "../../../models/interfaces";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContainer } from "../../../components";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const ResetPass = () => {
  // Initialize the translation hook.
  const [t] = useTranslation("translation");

  // Define validation schema using Zod.
  const schema = z
    .object({
      password: z
        .string()
        .min(8, t("password.error.length"))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          t("password.error.invalid")
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("confirmPassword.error.invalid"),
      path: ["confirmPassword"],
    });

  // Set up the form using React Hook Form and Zod resolver.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(schema),
  });

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <AuthContainer header={t("auth.resetPass")}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* Password Input */}
        <label
          htmlFor="password"
          className={`my-[3px] mt-3 font-bold cursor-pointer ${
            errors.password && "text-error-main"
          }`}>
          {t("password.label")}
        </label>
        <OutlinedInput
          id="password"
          type="password"
          error={errors.password && true}
          placeholder={t("password.placeholder")}
          {...register("password")}
        />
        {errors.password && (
          <div className="text-error-main">{errors.password.message}</div>
        )}

        {/* Confirm Password Input */}
        <label
          htmlFor="confirmPassword"
          className={`my-[3px] mt-3 font-bold cursor-pointer ${
            errors.confirmPassword && "text-error-main"
          }`}>
          {t("confirmPassword.label")}
        </label>
        <OutlinedInput
          id="confirmPassword"
          type="password"
          error={errors.confirmPassword && true}
          placeholder={t("confirmPassword.placeholder")}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className="text-error-main">
            {errors.confirmPassword.message}
          </div>
        )}
        {/* Submit Button */}
        <Button variant="contained" type="submit" size="large" sx={{ mt: 6 }}>
          {t("btn.reset")}
        </Button>
      </form>
    </AuthContainer>
  );
};
