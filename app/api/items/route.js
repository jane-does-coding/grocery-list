import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(req) {
	const body = await req.json();
	const { product, amount, store, notes, userId } = body;
	y;
	const currentUser = await getCurrentUser();

	try {
		const newItem = await prisma.item.create({
			data: {
				name: product,
				amount,
				store,
				notes,
				userId: currentUser.id,
			},
		});

		return NextResponse.json(newItem);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
