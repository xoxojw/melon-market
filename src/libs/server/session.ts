import { IronSessionOptions, getIronSession, IronSessionData, getServerActionIronSession } from "iron-session";

import { cookies } from "next/headers";

export const sessionOptions: IronSessionOptions = {
  password: process.env.IRON_SESSION_PW!,
  cookieName: "melonMarketSession",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
};

const getSession = async (req: Request, res: Response) => {
  const session = getIronSession(req, res, sessionOptions);
  return session;
};

const getServerActionSession = async () => {
  const session = getServerActionIronSession<IronSessionData>(sessionOptions, cookies());
  return session;
};

export { getSession, getServerActionSession };
