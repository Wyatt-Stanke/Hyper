import axios from "axios";
import HypixelAPIKey from "./HypixelAPIKey";

class HypixelAPIRequest {
	static baseURL = "https://api.hypixel.net";
	apiKey: HypixelAPIKey;
	path: string;
	parameters: Record<string, number | string>;

	constructor(options: {
		apiKey: HypixelAPIKey;
		path: string;
		parameters: Record<string, number | string>;
	}) {
		this.path = options.path;
		this.parameters = options.parameters;
		this.apiKey = options.apiKey;
	}

	async send() {
		return axios.get(`${HypixelAPIRequest.baseURL}/${this.path}`, {
			params: { key: this.apiKey.key, ...this.parameters }
		});
	}
}

export default HypixelAPIRequest;
