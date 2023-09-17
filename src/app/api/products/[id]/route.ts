import { NextRequest, NextResponse } from "next/server";
import prismaClient from "@/libs/server/prismaClient";

export const GET = async (req: NextRequest, { params }: { params: { id: string; }; }) => {
  const { id } = params;
  const product = await prismaClient.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avartar: true,
        }
      },
    }
  })
  return NextResponse.json({ ok: true, product }, { status: 200 });
};