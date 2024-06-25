import React from "react";
import Item from "./Item";

const List = () => {
	return (
		<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
			<div className="w-[96vw] bg-white rounded-lg">
				<h1 className="text-neutral-900 w-fit text-[2rem] jura mx-auto my-4">
					Grocery List
				</h1>
				<div className="flex flex-col gap-2 p-2">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
};

export default List;
