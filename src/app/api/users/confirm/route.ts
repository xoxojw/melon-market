import { NextRequest, NextResponse } from "next/server";

import { submitCookieToStorageServerAction } from "@/libs/server/serverActions";
import prismaClient from "@/libs/server/prismaClient";

export const POST = async (req: NextRequest) => {
  const { token } = await req.json();

  // 세션 있는지 확인
  // const oldCookieFromStorage = await readCookieFromStorageServerAction();

  const foundToken = await prismaClient.token.findUnique({
    where: {
      payload: token,
    },
  })

  // 토큰 없을 시 return
  if (!foundToken) return NextResponse.json({ status: 404 })
  
  // 토큰 존재 시
  await submitCookieToStorageServerAction(foundToken.userId);
  // const newCookieFromStorage = await readCookieFromStorageServerAction();
  // 토큰의 userId와 같은 userId를 가진 token 전부 삭제
  await prismaClient.token.deleteMany({
    where: {
      userId: foundToken.userId
    }
  })
  
  return NextResponse.json({ ok: true }, { status: 200 })
};