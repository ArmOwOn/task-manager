import { Button, Checkbox, OutlinedInput } from "@mui/material";
import { IRegisterFormData } from "../../../models/interfaces";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContainer } from "../../../components";
import { useTranslation } from "react-i18next";
import { z } from "zod";

export const Register = () => {
  // Initialize the translation hook.
  const [t] = useTranslation("translation");

  // Define validation schema using Zod.
  const passwordSchema = z
    .string()
    .min(8, t("password.error.length"))
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, t("password.error.invalid"));

  const schema = z
    .object({
      username: z
        .string()
        .min(3, t("username.error.length"))
        .regex(/^[a-zA-Z0-9_]+$/, t("username.error.invalid")),
      email: z.string().email(t("email.error.invalid")),
      password: passwordSchema,
      confirmPassword: z.string(),
      guidelines: z.boolean().refine((value) => value === true, {
        message: t("guidelines.error.invalid"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("confirmpassword.error.invalid"),
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
    <AuthContainer header={t("auth.register")}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* Username Input */}
        <label
          htmlFor="username"
          className={`my-[3px] mt-3 font-bold cursor-pointer ${
            errors.username && "text-error-main"
          }`}>
          {t("username.label")}
        </label>
        <OutlinedInput
          id="username"
          type="text"
          error={errors.username && true}
          placeholder={t("username.placeholder")}
          {...register("username")}
        />
        {errors.username && (
          <div className="text-error-main">{errors.username.message}</div>
        )}

        {/* Email Input */}
        <label
          htmlFor="email"
          className={`my-[3px] mt-3 font-bold cursor-pointer ${
            errors.email && "text-error-main"
          }`}>
          {t("email.label")}
        </label>
        <OutlinedInput
          id="email"
          type="email"
          error={errors.email && true}
          placeholder={t("email.placeholder")}
          {...register("email")}
        />
        {errors.email && (
          <div className="text-error-main">{errors.email.message}</div>
        )}

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
          {t("confirmpassword.label")}
        </label>
        <OutlinedInput
          id="confirmPassword"
          type="password"
          error={errors.confirmPassword && true}
          placeholder={t("confirmpassword.placeholder")}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className="text-error-main">
            {errors.confirmPassword.message}
          </div>
        )}

        {/* Guidelines Checkbox */}
        <div className="flex flex-row items-center">
          <Checkbox id="guidlines" {...register("guidelines")} />
          <label
            htmlFor="guidelines"
            className={`cursor-pointer ${
              errors.guidelines && "text-error-main"
            }`}>
            {t("guidelines.label")}
          </label>
        </div>
        {errors.guidelines && (
          <div className="text-error-main">{errors.guidelines.message}</div>
        )}

        {/* Submit Button */}
        <Button variant="contained" type="submit" size="large" sx={{ mt: 6 }}>
          {t("btn.signup")}
        </Button>
      </form>
    </AuthContainer>
  );
};
