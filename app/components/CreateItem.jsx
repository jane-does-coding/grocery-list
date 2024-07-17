"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "../../app/components/Input";

const CreateItem = () => {
	const router = useRouter();

	const [data, setData] = useState({
		product: "",
		amount: "",
		store: "",
		notes: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	/*
	const handleSubmit = async (event) => {
		event.preventDefault();
		 setIsLoading(true);

		try {
			await axios.post("/api/createitem", data);

			setIsLoading(false);

			if (callback?.ok) {
				router.push("/");
				toast.success("Logged in");
			} else if (callback?.error) {
				toast.error(callback.error);
			}
		} catch (error) {
			console.log(error);
			toast.error("Something went wrong");
			setIsLoading(false);
		} 
		console.log(data);
	}; */

	/* const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			const response = await axios.post("/api/createitem", {
				...data,
				userId: "user-id-here",
			});
			setIsLoading(false);

			if (response.status === 201) {
				router.push("/");
				toast.success("Item created successfully");
			} else {
				toast.error("Failed to create item");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
			setIsLoading(false);
		}
	}; */

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/items", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...data,
					userId: "user-id-here",
				}),
			});
			setIsLoading(false);

			if (response.ok) {
				router.push("/");
				router.refresh();
				toast.success("Item created successfully");
			} else {
				const errorData = await response.json();
				toast.error(errorData.message || "Failed to create item");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
			<form
				className="w-[94vw] bg-white rounded-lg px-4"
				onSubmit={handleSubmit}
			>
				<h1 className="text-neutral-900 w-fit text-[2rem] jura mx-auto my-4 mb-8">
					Create Item
				</h1>
				<div className="flex flex-col gap-2">
					<Input
						label={"Product"}
						name="product"
						value={data.product}
						onChange={handleChange}
					/>
					<Input
						label={"Amount"}
						name="amount"
						value={data.amount}
						onChange={handleChange}
					/>
					<Input
						label={"Store"}
						name="store"
						value={data.store}
						onChange={handleChange}
					/>
					<Input
						label={"Notes"}
						name="notes"
						value={data.notes}
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					className="w-full py-3 bg-neutral-800 text-white rounded-md my-4 mt-6"
				>
					Create Item
				</button>
			</form>
		</div>
	);
};

export default CreateItem;
