import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

const ViewPost = () => {
	const router = useRouter();
	console.log("Slug", router.query.slug);

	return (
		<>
			<Head>
				<title>Planeasy Takehome Test - View Post</title>
			</Head>

			<NavBar />

			<main className="p-5 bg-gray-100 h-screen pt-[5.25rem]">
				<p>hhhhhhhh</p>
			</main>
		</>
	);
};

export default ViewPost;
