import client from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// await client.user.create({
	// 	data: {
	// 		email: "hi@hi.com",
	// 		name: "hi",
	// 	}
	// })
	return NextResponse.json({ ok:true, text: "Hello" });
}