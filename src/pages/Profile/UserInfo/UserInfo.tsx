import { Typography, Avatar, Box, OutlinedInput, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorIcon from "@mui/icons-material/Error";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { IUserInfoFormData } from "../../../models/interfaces";

// Helper function to generate a background color for Avatar based on a string
const stringToColor = (string: string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

// Helper function to create an Avatar with initials
const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 100,
      height: 100,
      fontSize: 50,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

export const UserInfo = () => {
  // Initialize necessary hooks and variables
  const [t] = useTranslation("translation");
  const fullName = "Arman Seydi";

  // Define the validation schema using Zod
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
      newPassword: z
        .string()
        .min(8, t("password.error.length"))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
          t("password.error.invalid")
        ),
      confirmNewPassword: z.string(),
      guidelines: z.boolean().refine((value) => value === true, {
        message: t("guidelines.error.invalid"),
      }),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: t("confirmPassword.error.invalid"),
      path: ["confirmPassword"],
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
  } = useForm<IUserInfoFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex flex-col w-[400px]" onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* User Info Header */}
        <Typography
          fontSize={30}
          variant="h3"
          color="text.primary"
          fontWeight={800}
          mb={6}>
          {t("btn.profile.userInfo")}
        </Typography>
      </div>
      <div className="flex items-center gap-4 relative">
        {/* User Avatar and Profile Picture Upload */}
        <Avatar {...stringAvatar(fullName)} />
        <label
          className="opacity-0  hover:opacity-75 transition-opacity duration-500 cursor-pointer absolute flex flex-col justify-center items-center bg-slate-300 rounded-full w-[100px] h-[100px]"
          htmlFor="profilePic">
          <input type="file" id="profilePic" className="hidden" />
          <PhotoCameraIcon fontSize="large" />
        </label>
        <Typography
          fontSize={25}
          variant="h5"
          color="text.primary"
          fontWeight={600}>
          {fullName}
        </Typography>
      </div>
      <Box
        className="flex items-center mb-3 mt-1"
        sx={{
          color: "text.disabled",
        }}>
        {/* Warning */}
        <ErrorIcon fontSize="small" sx={{ marginX: 1 }} />
        {t("userInfo.warning")}
      </Box>

      {/* First Name Input */}
      <label
        htmlFor="firstName"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.firstName && "text-error-main"
        }`}>
        <Typography fontSize={15} fontWeight={600} color="text.primary">
          {t("userInfo.firstName")}
        </Typography>
      </label>
      <OutlinedInput
        id="firstName"
        {...register("firstName")}
        error={errors.firstName && true}
      />
      {errors.firstName && (
        <div className="text-error-main">{t("userInfo.errors.firstName")}</div>
      )}

      {/* Last Name Input */}
      <label
        htmlFor="lastName"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.lastName && "text-error-main"
        }`}>
        <Typography fontSize={15} fontWeight={600} color="text.primary">
          {t("userInfo.lastName")}
        </Typography>
      </label>
      <OutlinedInput
        id="lastName"
        {...register("lastName")}
        error={errors.lastName && true}
      />
      {errors.lastName && (
        <div className="text-error-main">{t("userInfo.errors.lastName")}</div>
      )}

      {/* Phone Number Input */}
      <label
        htmlFor="phoneNumber"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.phoneNumber && "text-error-main"
        }`}>
        <Typography fontSize={15} fontWeight={600} color="text.primary">
          {t("userInfo.phoneNumber")}
        </Typography>
      </label>
      <OutlinedInput
        id="phoneNumber"
        error={errors.phoneNumber && true}
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <div className="text-error-main">
          {t("userInfo.errors.phoneNumber")}
        </div>
      )}

      {/* Save Changes Button */}
      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{ mt: 6, fontWeight: 600 }}>
        {t("btn.saveChanges")}
      </Button>
    </form>
  );
};
