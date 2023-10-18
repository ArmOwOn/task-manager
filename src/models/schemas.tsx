import { useTranslation } from "react-i18next";
import z from "zod";

export const useCustomSchema = (schemaType: string) => {
  const [t] = useTranslation("translation");

  let schema;

  switch (schemaType) {
    /////////////////////////////////////////////////

    case "email":
      schema = z.object({
        email: z.string().email(t("email.error.invalid")),
      });
      break;

    /////////////////////////////////////////////////

    case "resetPass":
      schema = z
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
      break;

    /////////////////////////////////////////////////

    case "login":
      schema = z.object({
        email: z.string().email(t("email.error.invalid")),
        password: z
          .string()
          .min(8, t("password.error.length"))
          .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
            t("password.error.invalid")
          ),
      });
      break;

    /////////////////////////////////////////////////

    case "register":
      schema = z
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
      break;

    /////////////////////////////////////////////////

    case "accountInfo":
      schema = z
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
          newPassword: z
            .string()
            .min(8, t("newPassword.error.length"))
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
              t("newPassword.error.invalid")
            ),
          confirmNewPassword: z.string(),
        })
        .refine((data) => data.newPassword === data.confirmNewPassword, {
          message: t("confirmPassword.error.invalid"),
          path: ["confirmNewPassword"],
        });
      break;

    //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
    default:
      throw new Error(`Invalid schema type: ${schemaType}`);
  }
  return schema;
};
