import { https, Request, Response } from "firebase-functions";
import * as db from "firebase-admin";

import { UserRouters } from "./Routers/user.routers";

db.initializeApp();

const userRouters = new UserRouters();

export const user = https.onRequest(
  async (request: Request, response: Response): Promise<void> => {
    await userRouters.execute(request, response);
  }
);
