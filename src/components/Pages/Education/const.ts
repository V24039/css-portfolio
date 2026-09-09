export interface IEducation {
  id: number;
  degree: string;
  institution: string;
  location: string;
  graduated: string;
}

export const education: IEducation[] = [
  {
    id: 1,
    degree: "B.E. in Electronics & Communication Engineering",
    institution: "Acharya Institute of Technology",
    location: "Bangalore",
    graduated: "Graduated 2021",
  },
];
