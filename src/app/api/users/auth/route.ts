import { NextRequest, NextResponse } from "next/server";

import { randomName } from "@/libs/client/utils";
import prismaClient from "@/libs/server/prismaClient";
import sendMessage from "@/libs/server/twilioClient";
import sendEmail from "@/libs/server/nodemailerClient";

export const POST = async (req: NextRequest) => {
  const { email, phone } = await req.json();
  const userPayload = phone ? { phone: phone } : email ? { email } : null;

  if (!userPayload) return NextResponse.json({ ok: false }, { status: 400 })

  const tokenPayload = Math.floor(100000 + Math.random() * 900000).toString();
  const token = await prismaClient.token.create({
    data: {
      payload: tokenPayload,
      user: {
        connectOrCreate: {
          where: {
            ...userPayload,
          },
          create: {
            name: randomName(userPayload)!,
            ...userPayload,
          },
        }
      }
    }
  })
  if (phone) {
    sendMessage(phone, tokenPayload);
  } else if (email) {
    sendEmail(email, tokenPayload)
  }
  console.log(token);
  return NextResponse.json({ ok: true }, { status: 200 })
};
