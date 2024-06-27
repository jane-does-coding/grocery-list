"use client";
import { motion } from "framer-motion";
import Item from "./Item";

const items = [
	{
		name: "Apples",
		amount: "4",
		store: "Walmart",
		notes: "",
	},
	{
		name: "Tea",
		amount: "24oz",
		store: "Winco",
		notes: "Mango tea and Nut tea",
	},
	{
		name: "Spagetti",
		amount: "1 pack",
		store: "Winco",
		notes: "",
	},
];

const List = ({ currentUser }) => {
	return (
		<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
			<div className="w-[96vw] bg-white rounded-lg">
				<h1 className="text-neutral-900 w-fit text-[2.25rem] jura mx-auto mt-4">
					Grocery List
				</h1>
				{currentUser && (
					<h2 className="jura mx-auto w-fit text-neutral-800 text-[1.25rem] mb-6">
						Welcome back, {currentUser.username}!
					</h2>
				)}
				{items.length < 1 ? (
					<div className="flex min-h-[60vh] w-full items-center justify-center">
						<h1 className="text-neutral-900 text-[1.5rem] jura mx-auto w-fit">
							No items yet
						</h1>
					</div>
				) : (
					<div className="flex flex-col gap-2 p-2 w-full">
						{items.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: -25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<Item key={index} index={index} item={item} />
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default List;
