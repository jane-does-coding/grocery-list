import getCurrentUser from "./getCurrentUser";
import prisma from "../libs/prismadb";

export default async function getListById(listId) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return null;

		const list = await prisma.list.findUnique({
			where: {
				id: listId,
			},
		});

		return list;
	} catch (error) {
		console.error("Error fetching list:", error);
		return null;
	}
}
