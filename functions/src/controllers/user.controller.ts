import { FirestoreAdapter } from "../adapters/firestore.adapter";
import { User } from "../domain/user.entity";
import { IUser } from "../interfaces/user";
import { BaseController } from "./base.controller";
import * as admin from "firebase-admin";

export class UserController extends BaseController<IUser> {
  private user: User;
  constructor(dbAdapter = new FirestoreAdapter<IUser>("users")) {
    const user = new User(dbAdapter);

    super(user);
    this.user = user;
  }

  async save(user: IUser): Promise<IUser | Error> {
    const { email, password, ...restUser } = user;
    const { uid } = await admin.auth().createUser({
      email,
      password,
      displayName: restUser.name,
    });

    const response = await this.user.save({ id: uid, email, ...restUser });
    return response;
  }
}
