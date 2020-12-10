import { IAdress } from "./adress";

type Genre = "male" | "female" | "mulher trans" | "homem trans" | "nao binario" | "indefinido"

export interface IUser {
  name: string
  dateBirth: Date
  genre?: Genre
  email?: string
  imgSrc?: string
  adress?: IAdress
  biography?: string
  hobies?: string[]
  interests?: string[]
}
