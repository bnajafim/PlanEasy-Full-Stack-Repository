import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";
//import { Formik, Field } from "formik";
import GuestBookEntry from "./test";

const Create = () => {
	return (
		<>
			<Head>
				<title>Planeasy Takehome Test - Create Post</title>
			</Head>

			<NavBar />

			<main className="p-5 bg-gray-100 h-screen pt-[5.25rem]">
				<GuestBookEntry />
			</main>
		</>
	);
};

export default Create;
