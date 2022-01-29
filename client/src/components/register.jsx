import clsx from "clsx";
import React from "react";

export const RegisterPage = () => {
	return (
		<div className="flex h-screen">
			<div className="register w-96 border-accent-1 border-2 m-auto">
				<h1 className="text-5xl mb-8">Register Page</h1>
				<form>
					<div class="mb-6">
						<label for="email" class="block mb-2 text font-medium">
							Your email
						</label>
						<input
							type="email"
							id="email"
							class={clsx(
								"bg-gray-50 border border-gray-300 text-gray-900",
								"text rounded-lg focus:ring-blue-500 focus:border-blue-500",
								"block w-full p-2.5"
							)}
							placeholder="johndoe@gmail.com"
							required
						/>
					</div>
					<div class="mb-6">
						<label for="password" class={"block mb-2 text font-medium"}>
							Your password
						</label>
						<input
							type="password"
							id="password"
							class={clsx(
								"bg-gray-50 border border-gray-300",
								"text-gray-900 text rounded-lg focus:ring-blue-500",
								"focus:border-blue-500 block w-full p-2.5"
							)}
							required
						/>
					</div>
					<div class="flex items-start mb-6">
						<div class="flex items-center h-5">
							<input
								id="remember"
								aria-describedby="remember"
								type="checkbox"
								class={clsx(
									"w-4 h-4 bg-gray-50 rounded border",
									"border-gray-300 focus:ring-3"
								)}
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						class={clsx(
							"text-white bg-blue-700 hover:bg-blue-800",
							"focus:ring-4 focus:ring-blue-300 font-medium rounded-lg",
							"text w-full sm:w-auto px-5 py-2.5 text-center"
						)}
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
