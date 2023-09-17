"use client";
import type { NextPage } from "next";
import Template from "./template";
import { Products, FloatingButton } from "@/components";
import { useUser } from "@/hooks";
import useSWR from "swr";
import { Product } from "@prisma/client";

interface ProductsResponse {
	ok: boolean;
	products: Product[];
}

const Home: NextPage = () => {
	const { user, isLoading } = useUser();
	const { data } = useSWR<ProductsResponse>("/api/products");
	console.log("product data > ", data);
	return (
		<Template title="홈" hasTabBar>
			<main className="flex flex-col space-y-5 relative w-full h-full">
				{data?.products.map((product) => (
					<Products
						key={product.id}
						id={product.id}
						title={product.name}
						price={product.price}
						comments={1}
						hearts={1}
					/>
				))}
				<FloatingButton
					href="/products/upload">
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
			</main>
		</Template>
	);
};

export default Home;
