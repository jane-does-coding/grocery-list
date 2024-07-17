import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(req) {
	const body = await req.json();
	const { product, amount, store, notes, userId } = body;
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

export async function DELETE(req) {
	const { id } = await req.json();
	const currentUser = await getCurrentUser();

	try {
		const deletedItem = await prisma.item.deleteMany({
			where: {
				id: id,
				userId: currentUser.id,
			},
		});

		if (deletedItem.count === 0) {
			return NextResponse.json(
				{ error: "Item not found or unauthorized" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "Item deleted successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
