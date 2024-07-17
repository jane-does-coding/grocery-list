import Image from "next/image";
import List from "./components/List";
import getCurrentUser from "../app/actions/getCurrentUser";
import getItems from "../app/actions/getItems";
import CreateListForm from "../app/components/CreateList";
import AddUserToListForm from "../app/components/AddUserToList";
import SignOutBtn from "./components/SignOutBtn";

export default async function Home() {
	const currentUser = await getCurrentUser();
	/* const items = await getItems();
	console.log(items); */

	return (
		<div>
			{/* 			<List currentUser={currentUser} items={items} />
			 */}{" "}
			<CreateListForm />
			<AddUserToListForm listId={"6697ea27b068988094ac888d"} />
			<SignOutBtn />
		</div>
	);
}
