import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "../../actions/getCurrentUser";

export async function POST(req) {
	const { product, amount, store, notes, listId } = await req.json();
	const currentUser = await getCurrentUser();

	try {
		const userList = await prisma.userList.findFirst({
			where: {
				userId: currentUser.id,
				listId,
			},
		});

		if (!userList) {
			return NextResponse.json(
				{ error: "User not authorized for this list" },
				{ status: 403 }
			);
		}

		const newItem = await prisma.item.create({
			data: {
				name: product,
				amount,
				store,
				notes,
				listId,
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

export async function PUT(req) {
	const { id, isBought } = await req.json();
	const currentUser = await getCurrentUser();

	try {
		const updatedItem = await prisma.item.updateMany({
			where: {
				id: id,
				userId: currentUser.id,
			},
			data: {
				isBought: isBought,
			},
		});

		if (updatedItem.count === 0) {
			return NextResponse.json(
				{ error: "Item not found or unauthorized" },
				{ status: 404 }
			);
		}

		return NextResponse.json({ message: "Item updated successfully" });
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}
}
