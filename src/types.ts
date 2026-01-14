export interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}

export interface StudentState {
  students: Student[];
}