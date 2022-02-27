import Head from "next/head";
import NavBar from "../components/NavBar";
import Create from "./guestbook/create";

const Home = () => {
	return (
		<>
			<Head>
				<title>Planeasy Takehome Test</title>
				<meta name="description" content="frontend for planeasy takehome test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />

			<main className="p-5 bg-gray-100 h-screen pt-[5.25rem]">
				<Create />
			</main>
		</>
	);
};

export default Home;
