import { randomName } from "@/libs/client/utils";
import client from "@/libs/server/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, phone } = await req.json();
  const userPayload = phone ? { phone: Number(phone) } : { email }
  const token = await client.token.create({
    data: {
      payload: "3333",
      user: {
        connectOrCreate: {
          where: {
            ...userPayload,
          },
          create: {
            name: randomName(userPayload),
            ...userPayload,
          },
        }
      }
    }
  })
  console.log(token);
  return NextResponse.json({ ok: true }, { status: 200 })
};
