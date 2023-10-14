import { Link, Button, OutlinedInput } from "@mui/material";
import { ILoginFormData } from "../../../models/interfaces";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContainer } from "../../../components";
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

  // Set up the form using React Hook Form and Zod resolver.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: zodResolver(schema) });

  // Handle form submission.
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <AuthContainer header={t("auth.login")}>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <label
          htmlFor="email"
          className={`my-[3px] font-bold cursor-pointer ${
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

        {/* Forgot Password Link */}
        <Link
          href="/authentication/forgotpass"
          underline="hover"
          fontWeight={700}>
          {t("password.forgot")}
        </Link>

        {/* Submit Button */}
        <Button variant="contained" type="submit" size="large" sx={{ mt: 6 }}>
          {t("btn.login")}
        </Button>
      </form>
    </AuthContainer>
  );
};
