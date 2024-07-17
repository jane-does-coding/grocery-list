"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddUserToListForm = ({ listId }) => {
	const [username, setUsername] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`/api/lists/addUser`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ listId, username }),
			});

			if (response.ok) {
				toast.success("User added to list successfully");
				router.refresh();
			} else {
				const errorData = await response.json();
				toast.error(errorData.error || "Failed to add user to list");
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
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				placeholder="Username"
				required
			/>
			<button type="submit">Add User</button>
		</form>
	);
};

export default AddUserToListForm;
