import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";
import getListById from "../../../actions/getListById";

export async function POST(req) {
	const { listId, username } = await req.json();

	try {
		// Find the user by username
		const user = await prisma.user.findUnique({
			where: { username },
		});

		if (!user) {
			return NextResponse.json({ error: "User not found" }, { status: 404 });
		}

		const list = await getListById(listId);

		if (!list) {
			return NextResponse.json({ error: "List not found" }, { status: 404 });
		}

		// Create the association in UserList
		const userList = await prisma.userList.create({
			data: {
				userId: user.id,
				listId: list.id,
			},
		});

		return NextResponse.json(userList);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
