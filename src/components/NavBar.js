import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
	const router = useRouter();

	return (
		<nav className="fixed top-0 left-0 w-full flex flex-row text-lg justify-between items-baseline bg-sky-700 p-4 text-gray-200">
			<span className="text-2xl mr-4 font-semibold">PlanEasy Takehome Test</span>
			<ul className="flex flex-row gap-4 font-medium">
				<li>
					<Link href="/">
						<a className={`hover:text-white hover:border-b ${router.pathname === "/guestbook/test" ? "border-b" : ""}`}>GuestBook</a>
					</Link>
				</li>
				<li>
					<Link href="/examples/formik">
						<a className={`hover:text-white hover:border-b ${router.pathname === "/examples/formik" ? "border-b" : ""}`}>Formik Example</a>
					</Link>
				</li>
				<li>
					<Link href="/examples/urql">
						<a className={`hover:text-white hover:border-b ${router.pathname === "/examples/urql" ? "border-b" : ""}`}>URQL Example</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
