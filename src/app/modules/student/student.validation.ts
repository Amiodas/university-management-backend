import { z } from "zod";

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(3)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "First name must start with a capital letter",
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNumber: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNumber: z.string(),
});

const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNumber: z.string(),
  address: z.string(),
});

const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  email: z.string(),
  contactNumber: z.string(),
  emergencyContacctNumber: z.string(),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImage: z.string(),
  isActive: z.enum(["active", "blocked"])
});

export default studentValidationSchema;
