"use client";
import { motion } from "framer-motion";
import Item from "./Item";

const items = new Array(8).fill(null); // Create an array with 8 items

const List = () => {
	return (
		<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
			<div className="w-[96vw] bg-white rounded-lg">
				<h1 className="text-neutral-900 w-fit text-[2rem] jura mx-auto my-4">
					Grocery List
				</h1>
				<div className="flex flex-col gap-2 p-2">
					{items.map((_, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: -25 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<Item key={index} index={index} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default List;
