import HypixelAPIAgent from "../src/classes/HypixelAPIAgent";
import HypixelAPIKey from "../src/classes/HypixelAPIKey";

import axios from "axios";

describe("HypixelAPIAgent class", () => {
	describe("HypixelAPIAgent as static", () => {
		describe("HypixelAPIAgent baseURL", () => {
			it("make sure that the baseURL is valid", () => {
				expect(typeof HypixelAPIAgent.baseURL).toBe("string");
				expect(HypixelAPIAgent.baseURL).toBe("https://api.hypixel.net");
			});

			it("test the baseURL", () => {
				axios.get(HypixelAPIAgent.baseURL).then((response) => {
					expect(response.status).toBe(200);
				});
			});
		});

		describe("HypixelAPIAgent get w/ axios", () => {
			it("make a request (single paramater)", async () => {
				axios
					.get(
						`${HypixelAPIAgent.baseURL}/key?key=${process.env.HYPIXEL_API_KEY}`
					)
					.then((response) => {
						expect(response.status).toBe(200);
					});
			});

			it("make a request (multiple parameters)", async () => {
				axios
					.get(
						`${HypixelAPIAgent.baseURL}/player?key=${process.env.HYPIXEL_API_KEY}&uuid=fc5389aa-47b5-4b75-98f9-27e1245da3cd`
					)
					.then((response) => {
						expect(response.status).toBe(200);
						expect(response.data.success).toBe(true);
					});
			});
		});
	});

	describe("HypixelAPIAgent", () => {
		describe("HypixelAPIAgent get", () => {
			it("make a request (single paramater)", async () => {
				const agent = new HypixelAPIAgent({
					apiKey: new HypixelAPIKey(process.env.HYPIXEL_API_KEY)
				});

				const request = await agent.send({
					path: "key",
					parameters: {}
				});
			});

			it("make a request (multiple parameters)", async () => {
				const agent = new HypixelAPIAgent({
					apiKey: new HypixelAPIKey(process.env.HYPIXEL_API_KEY)
				});

				const request = await agent.send({
					path: "player",
					parameters: {
						uuid: "fc5389aa-47b5-4b75-98f9-27e1245da3cd"
					}
				});

				expect(request.status).toBe(200);
				expect(request.data.success).toBe(true);
			});
		});
	});
});
