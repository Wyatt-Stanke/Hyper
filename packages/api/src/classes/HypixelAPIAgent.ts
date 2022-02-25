import { HypixelAPIRequest } from "..";
import HypixelAPIKey from "./HypixelAPIKey";

/**
 * ### HypixelAPIAgent
 *
 * This is the main class for making requests to the Hypixel API.
 *
 * @example
 * 	/// Make a request to the Hypixel API
 * 	// Create a new agent
 * 	const agent = new HypixelAPIAgent({
 * 		apiKey: new HypixelAPIKey("<your-api-key>")
 * 	});
 *
 * 	// Send a request
 * 	const request = await agent.send({
 * 		path: "key",
 * 		parameters: {}
 * 	});
 *
 * @class HypixelAPIRequest
 * @param {HypixelAPIKey} options.apiKey - The Hypixel API key to use.
 * @static {string} baseURL - The base URL for the Hypixel API.
 */
class HypixelAPIAgent {
	static baseURL: string = "https://api.hypixel.net";
	apiKey: HypixelAPIKey;

	constructor(options: { apiKey: HypixelAPIKey }) {
		this.apiKey = options.apiKey;
	}

	async send(options: {
		path: string;
		parameters: { [key: string]: number | string };
	}) {
		return new HypixelAPIRequest({
			path: options.path,
			parameters: options.parameters,
			apiKey: this.apiKey
		}).send();
	}
}

export default HypixelAPIAgent;
