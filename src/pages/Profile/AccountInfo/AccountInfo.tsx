import { Typography, OutlinedInput, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IAccountInfoFormData } from "../../../models/interfaces";

export const AccountInfo = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");

  // Define the validation schema using Zod
  const schema = z.object({
    firstName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    phoneNumber: z.string().min(10).max(20),
  });

  // Form submission handler
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // Initialize useForm with ZodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAccountInfoFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col w-[400px]" onSubmit={handleSubmit(onSubmit)}>
      {/* User Info Header */}
      <Typography fontSize={30} variant="h3" fontWeight={800} mb={6}>
        {t("btn.profile.accountinfo")}
      </Typography>
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

      {/* New Password Input */}
      <label
        htmlFor="password"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.newPassword && "text-error-main"
        }`}>
        {t("newPassword.label")}
      </label>
      <OutlinedInput
        id="newPassword"
        type="newPassword"
        error={errors.newPassword && true}
        placeholder={t("newPassword.placeholder")}
        {...register("newPassword")}
      />
      {errors.newPassword && (
        <div className="text-error-main">{errors.newPassword.message}</div>
      )}

      {/* Confirm New Password Input */}
      <label
        htmlFor="confirmPassword"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.confirmNewPassword && "text-error-main"
        }`}>
        {t("confirmpassword.label")}
      </label>
      <OutlinedInput
        id="confirmPassword"
        type="password"
        error={errors.confirmNewPassword && true}
        placeholder={t("confirmpassword.placeholder")}
        {...register("confirmNewPassword")}
      />
      {errors.confirmNewPassword && (
        <div className="text-error-main">
          {errors.confirmNewPassword.message}
        </div>
      )}

      {/* Submit Button */}
      <Button variant="contained" type="submit" size="large" sx={{ mt: 6 }}>
        {t("btn.savechanges")}
      </Button>
    </form>
  );
};
