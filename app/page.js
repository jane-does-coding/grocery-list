import Image from "next/image";
import List from "./components/List";
import getCurrentUser from "../app/actions/getCurrentUser";
import getItems from "../app/actions/getItems";
export default async function Home() {
	const currentUser = await getCurrentUser();
	const items = await getItems();
	console.log(items);

	return (
		<div>
			<List currentUser={currentUser} items={items} />
		</div>
	);
}
