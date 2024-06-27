"use client";
import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
	const router = useRouter();

	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({
			...data,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsLoading(true);

		try {
			await axios.post("/api/register", data);
			const callback = await signIn("credentials", {
				...data,
				redirect: false,
			});

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
	};

	return (
		<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
			<form
				className="w-[94vw] bg-white rounded-lg px-4"
				onSubmit={handleSubmit}
			>
				<h1 className="text-neutral-900 w-fit text-[2rem] jura mx-auto my-4 mb-8">
					Register
				</h1>
				<div className="flex flex-col gap-2">
					<Input
						label={"Username"}
						name="username"
						value={data.username}
						onChange={handleChange}
					/>
					<Input
						label={"Email"}
						name="email"
						value={data.email}
						onChange={handleChange}
					/>
					<Input
						label={"Password"}
						type="password"
						name="password"
						value={data.password}
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					className="w-full py-3 bg-neutral-800 text-white rounded-md my-4 mt-6"
				>
					Register
				</button>
				<p className="text-neutral-500 text-center mb-4 font-light">
					Already have an account?{" "}
					<a href="/login" className="text-neutral-800 font-medium">
						Login
					</a>
				</p>
			</form>
		</div>
	);
};

export default Register;
