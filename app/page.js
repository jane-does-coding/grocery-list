import Image from "next/image";
import List from "./components/List";
import getCurrentUser from "../app/actions/getCurrentUser";

export default async function Home() {
	const currentUser = await getCurrentUser();
	console.log(currentUser);
	return (
		<div>
			<List />
		</div>
	);
}
