import HypixelAPIKey from "../src/classes/HypixelAPIKey";

describe("HypixelAPIRequest", () => {
	it("make a new api key", () => {
		let key = new HypixelAPIKey("test-key");
		expect(key.key).toBe("test-key");
	});

	it("validate (valid key)", async () => {
		let key = new HypixelAPIKey(process.env.HYPIXEL_API_KEY);
		expect(await key.validate()).toBe(true);
	});

	it("validate (invalid key)", async () => {
		let key = new HypixelAPIKey("invalid-key");
		expect(await key.validate()).toBe(false);
	});
});
