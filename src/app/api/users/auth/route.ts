import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const res = await req.json();
  console.log(res);

  if (req.method !== "POST") {
    res.status(401).end();
  }
  return NextResponse.json({ res });
};