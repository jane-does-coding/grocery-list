"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CreateListForm = () => {
	const [name, setName] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`/api/lists`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name }),
			});

			if (response.ok) {
				toast.success("List created successfully");
				router.refresh();
			} else {
				const errorData = await response.json();
				toast.error(errorData.error || "Failed to create list");
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="List Name"
				required
			/>
			<button type="submit">Create List</button>
		</form>
	);
};

export default CreateListForm;
