"use client";
import React from "react";
import { signOut } from "next-auth/react";

const SignOutBtn = () => {
	return (
		<div>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	);
};

export default SignOutBtn;
