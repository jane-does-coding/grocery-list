import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(req) {
	const { name } = await req.json();
	const currentUser = await getCurrentUser();

	try {
		const newList = await prisma.list.create({
			data: {
				name,
				users: {
					create: {
						userId: currentUser.id,
					},
				},
			},
		});

		return NextResponse.json(newList);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
