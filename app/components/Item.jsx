"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Item = ({ item }) => {
	const { ref, inView } = useInView({
		triggerOnce: true, // Trigger animation only once
		threshold: 0.1, // 10% of the element needs to be visible
	});

	const variants = {
		hidden: { opacity: 0, x: 50 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.1,
			},
		}),
	};

	return (
		<div
			ref={ref}
			className="bg-neutral-100 border-2 border-neutral-200/25 p-2 rounded-md"
		>
			<h2 className="text-neutral-900">
				{item.name}{" "}
				<span className="text-neutral-500">{`(${item.amount})`}</span>
			</h2>
			<div className="flex gap-2 my-2">
				{["Store 1", "Store 2", "Store 3"].map((store, index) => (
					<motion.span
						key={index}
						className="py-1 px-3 bg-blue-200 rounded-full text-xs text-neutral-800"
						custom={index}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={variants}
					>
						{store}
					</motion.span>
				))}
			</div>
		</div>
	);
};

export default Item;
