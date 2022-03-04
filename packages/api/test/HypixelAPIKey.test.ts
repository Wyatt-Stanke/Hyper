import HypixelAPIKey from "../src/classes/HypixelAPIKey";

describe("HypixelAPIKey class", () => {
	it("make a new api key", () => {
		const key = new HypixelAPIKey("test-key");
		expect(key.key).toBe("test-key");
	});

	it("validate (valid key)", async () => {
		const key = new HypixelAPIKey(process.env.HYPIXEL_API_KEY);
		expect(await key.validate()).toBe(true);
	});

	it("validate (invalid key)", async () => {
		const key = new HypixelAPIKey("invalid-key");
		expect(await key.validate()).toBe(false);
	});
});
