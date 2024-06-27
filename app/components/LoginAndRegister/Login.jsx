import Input from "../Input";

const Login = () => {
	return (
		<div>
			<div className="min-h-screen bg-indigo-400 flex items-center justify-center">
				<div className="w-[94vw] bg-white rounded-lg px-4">
					<h1 className="text-neutral-900 w-fit text-[2rem] jura mx-auto my-4 mb-8">
						Login
					</h1>
					<div className="flex flex-col gap-2">
						<Input label={"Email"} />
						<Input label={"Password"} />
					</div>
					<button className="w-full py-3 bg-neutral-800 text-white rounded-md my-4 mt-6">
						Login
					</button>
					<p className="text-neutral-500 text-center mb-4 font-light">
						Don't have an account?{" "}
						<a href="/register" className="text-neutral-800 font-medium">
							Register
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
