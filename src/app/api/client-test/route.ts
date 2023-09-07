// import client from "@/libs/client";
import { NextResponse } from "next/server";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
// res.status(200).json({ text: "Hello" });
// }

export async function GET(request: Request) {
	// client.user.create({
	// 	data: {
	// 		email: "hi@hi.com",
	// 		name: "hi"
	// 	}
	// })
	return NextResponse.json({ ok:true, text: "Hello" });
}