import { readCookieFromStorageServerAction, submitCookieToStorageServerAction } from "@/libs/server/serverActions";
import prismaClient from "@/libs/server/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  // 사용자가 로그인 후 웹 서비스의 어느 페이지에 있든 자신의 고유 cookie 암호화 데이터는 가지고 올 것
  const cookieFromStorage = await readCookieFromStorageServerAction();
  // console.log("api/users/me에서 쿠키확인", cookieFromStorage);
  const findProfile = await prismaClient.user.findUnique({
    where: { id: cookieFromStorage.user?.id },
  });
  // console.log("me에서 가져온 프로필", findProfile, typeof findProfile);
  const userProfile = JSON.parse(
    JSON.stringify(
      findProfile,
      (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
    ),
  );
  return NextResponse.json({ ok: true, userProfile }, { status: 200 });
}
