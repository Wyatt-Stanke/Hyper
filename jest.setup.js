import { config } from "dotenv";
import { findUp } from "find-up";

async function setup() {
	config({
		path: await findUp(".env")
	});
}

export default setup;
