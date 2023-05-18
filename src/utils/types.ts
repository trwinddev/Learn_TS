export type Age = 18 | 21 | "30";

// Union type: typeA | typeB
// Intersection types: typeA & typeB

interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IContact;
let trwind: Employee = {
  id: 1,
  name: "phong",
  email: "phong@gmail.com",
  phone: "12345",
};

// Type casting: as
// type assertion: as
