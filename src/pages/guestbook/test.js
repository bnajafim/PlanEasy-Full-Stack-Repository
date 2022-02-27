import Head from "next/head";
import NavBar from "../../components/NavBar";
import { Formik, Field } from "formik";

const GuestBookEntry = () => {
	//actions.setSubmitting(false); // only needs to be provided if onSubmit isn't async

	return (
		<Formik
			initialValues={{
				name: "",
				message: "",
			}}
			onSubmit={(values, actions) => {
				if (values.message.length > 255 || values.name.length > 25) {
					alert("Please make sure the message length is lower than 255 and the name length is less than 25");
					actions.setSubmitting(false);
				}

				// mutation will be used here
			}}
		>
			{(props) => (
				<form onSubmit={props.handleSubmit} className="p-4 border bg-white rounded-md flex flex-col w-1/2 shadow mx-auto">
					<label htmlFor="name">Name</label>
					<Field id="name" name="name" type="text" placeholder="Name" className="border-gray-300 rounded focus:ring-sky-200 focus:border-gray-400" />
					<label htmlFor="message">Message</label>
					<Field id="message" name="message" type="text" placeholder="Message" className="border-gray-300 rounded focus:ring-sky-200 focus:border-gray-400" />

					<button type="submit" className="bg-sky-600 hover:bg-sky-500 text-white rounded-md px-3 py-2 mr-auto mt-4">
						Create
					</button>
				</form>
			)}
		</Formik>
	);
};
export default GuestBookEntry;
