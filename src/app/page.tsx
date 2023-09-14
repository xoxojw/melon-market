"use client";
import type { NextPage } from "next";
import Template from "./template";
import { Item, FloatingButton } from "@/components";
import { useUser } from "@/hooks";

const Home: NextPage = () => {
	const { user, isLoading } = useUser();
	console.log(user, isLoading)
	return (
		<Template title="홈" hasTabBar>
			<div className="flex flex-col space-y-5">
				{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
					<Item
						key={i}
						id={i}
						title="iPhone 14"
						price={70}
						comments={1}
						hearts={1}
					/>
				))}
				<FloatingButton href="/items/upload">
					<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</FloatingButton>
			</div>
		</Template>
	);
};

export default Home;
