import { TStudent } from "../student/student.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, student: TStudent) => {
    const result = await User.create(student);
    return result;
}


export const userServices = {
    createStudentIntoDB,
}