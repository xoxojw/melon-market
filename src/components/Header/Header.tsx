"use client";
import { useRouter } from "next/navigation";
import { cls } from "@/libs/client/utils";

interface HeaderProps {
	title?: string;
	canGoBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, canGoBack }) => {
	const router = useRouter();
	const onClick = () => {
		router.back();
	};
	return (
		<>
			{/* position: fixed를 적용시키면 body의 max-width를 따르지 않음
        fixed된 것은 다른 평면에 있기 때문
        따라서 다시 따로 width를 설정해주어야 함 */}
			<div
				className={cls(
					!canGoBack ? "justify-center" : "",
					"fixed top-0 w-full max-w-3xl bg-white py-5 flex items-center text-gray-800 border-b text-xl px-5"
				)}
			>
				{canGoBack ? (
					<button onClick={onClick}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-7 h-7"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
				) : null}
				{title ? <span>{title}</span> : null}
			</div>
		</>
	);
};

export default Header;
