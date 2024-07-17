import getCurrentUser from "./getCurrentUser";
import prisma from "../libs/prismadb";

export default async function getItems() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const items = await prisma.item.findMany({
			where: {
				userId: currentUser.id,
			},
		});

		return items;
	} catch (error) {
		console.error("Error fetching items:", error);
		return { message: "Internal Server Error" };
	}
}
