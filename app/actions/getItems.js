import getCurrentUser from "./getCurrentUser";
import prisma from "../libs/prismadb";

export default async function getItems() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) return [];

		const recipes = await prisma.item.findMany({});

		return recipes;
	} catch (error) {
		console.error("Error fetching recipes:", error);
		return { message: "Internal Server Error" };
	}
}
