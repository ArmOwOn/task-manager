import { Typography, Avatar, Box, OutlinedInput, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorIcon from "@mui/icons-material/Error";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IUserInfoFormData } from "../../../models/interfaces";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const stringToColor = (string: string) => {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};
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
  const fullName = "Arman Seydi";

  const [t] = useTranslation("translation");

  const schema = z.object({
    fistName: z.string().min(3).max(20),
    lastName: z.string().min(3).max(20),
    phoneNumber: z.string().min(10).max(20),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

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
        <Typography fontSize={30} variant="h3" fontWeight={800} mb={6}>
          {t("btn.profile.userinfo")}
        </Typography>
      </div>
      <div className="flex items-center gap-4 relative">
        <Avatar {...stringAvatar(fullName)} />
        <label
          className="opacity-0  hover:opacity-75 transition-opacity duration-500 cursor-pointer absolute flex flex-col justify-center items-center bg-slate-300 rounded-full w-[100px] h-[100px]"
          htmlFor="profilePic">
          <input type="file" id="profilePic" className="hidden" />
          <PhotoCameraIcon fontSize="large" />
        </label>
        <Typography fontSize={25} variant="h5" fontWeight={600}>
          {fullName}
        </Typography>
      </div>
      <Box
        className="flex items-center mb-3 mt-1"
        sx={{
          color: "text.disabled",
        }}>
        <ErrorIcon fontSize="small" sx={{ marginX: 1 }} />
        {t("userinfo.warning")}
      </Box>

      <label
        htmlFor="firstName"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.firstName && "text-error-main"
        }`}>
        {t("userinfo.firstname")}
      </label>
      <OutlinedInput
        id="firstName"
        {...register("firstName")}
        error={errors.firstName && true}
      />
      {errors.firstName && (
        <div className="text-error-main">{t("userinfo.errors.firstname")}</div>
      )}

      <label
        htmlFor="lastName"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.lastName && "text-error-main"
        }`}>
        {t("userinfo.lastname")}
      </label>
      <OutlinedInput
        id="lastName"
        {...register("lastName")}
        error={errors.lastName && true}
      />
      {errors.lastName && (
        <div className="text-error-main">{t("userinfo.errors.lastname")}</div>
      )}

      <label
        htmlFor="phoneNumber"
        className={`my-[3px] mt-3 font-bold cursor-pointer ${
          errors.phoneNumber && "text-error-main"
        }`}>
        {t("userinfo.phonenumber")}
      </label>
      <OutlinedInput
        id="phoneNumber"
        error={errors.phoneNumber && true}
        {...register("phoneNumber")}
      />
      {errors.phoneNumber && (
        <div className="text-error-main">
          {t("userinfo.errors.phonenumber")}
        </div>
      )}

      <Button variant="contained" type="submit" size="large" sx={{ mt: 6 }}>
        {t("btn.savechanges")}
      </Button>
    </form>
  );
};
