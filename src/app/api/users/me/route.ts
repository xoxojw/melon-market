import { readCookieFromStorageServerAction } from "@/libs/server/serverActions";
import prismaClient from "@/libs/server/prismaClient";
import { NextResponse } from "next/server";

export const GET = async ( isPrivate = true ) => {
  // 사용자가 로그인 후 웹 서비스의 어느 페이지에 있든 자신의 고유 cookie 암호화 데이터는 가지고 올 것
  const cookieFromStorage = await readCookieFromStorageServerAction();
  
  if (isPrivate && !cookieFromStorage.user) return NextResponse.json({ ok: false, error: "로그인 해주세요." }, { status: 401 });

  const findProfile = await prismaClient.user.findUnique({
    where: { id: cookieFromStorage.user?.id },
  });
  const userProfile = JSON.parse(
    JSON.stringify(
      findProfile,
      (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
    ),
  );
  return NextResponse.json({ ok: true, userProfile }, { status: 200 });
}
