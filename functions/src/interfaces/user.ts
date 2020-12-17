// import { IAdress } from "./adress";

type Gender =
  | "male"
  | "female"
  | "mulher trans"
  | "homem trans"
  | "nao binario"
  | "indefinido"
  | "agenero";

type UserExperience = {
  sharedApHouse?: string;
  sharedRoom?: string;
  totalShared?: number;
  totalPeople?: number;
  timeSpent?: string;
  troubleLiving?: string;
};

type UserGoals = {
  mainGoal?: string;
  livingLocation?: string;
  maxMonthAmount?: string;
  quantityPeople?: number;
};

export interface IUser {
  id?: string;
  name: string;
  dateBirth: string;
  gender?: Gender;
  email?: string;
  password?: string;
  img?: string;
  age: number;
  // adress?: IAdress;
  bio?: string;
  hobbies?: string[];
  interests?: string[];
  ocupation?: string;
  experience?: UserExperience;
  goals: UserGoals;
}
