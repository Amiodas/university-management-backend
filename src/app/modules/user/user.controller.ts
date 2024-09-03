import { TStudent } from './../student/student.interface';
import { Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const {password, student: TStudent} = req.body;
    // will call service func to send this data
    const result = await userServices.createStudentIntoDB(password, TStudent);
    //send response
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createStudent,
};
