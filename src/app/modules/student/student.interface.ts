export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
};

export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNumber: string;
    address: string; 
}

export type TStudent = {
  id: string;  
  name: userName;
  gender: "male" | "female";
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContacctNumber: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage: string;
  isActive: "active" | "blocked";  
};
