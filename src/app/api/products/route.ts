import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/libs/server/prismaClient";
import { getServerActionSession } from "@/libs/server/session";

export const POST = async (req: NextRequest) => {
  const { name, price, description } = await req.json();
  const userSession = await getServerActionSession();

  const product = await prismaClient.product.create({
    data: {
      name,
      price: Number(price),
      description,
      image: "image",
      user: {
        connect: {
          id: userSession.user?.id,
        },
      },
    },
  });

  return NextResponse.json({ ok: true, product }, { status: 200 });
};
