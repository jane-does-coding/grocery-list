/* import prisma from "@/app/libs/prismadb";
 */ import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(req) {
	const body = await req.json();
	const { email, password, username } = body;

	const hashedPassword = await bcrypt.hash(password, 12);

	const user = await prisma.user.create({
		data: {
			email,
			hashedPassword,
			username,
		},
	});

	return NextResponse.json(user);
}
