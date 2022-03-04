import axios from "axios";

/**
 * The Hypixel API key class.
 *
 * @class HypixelAPIKey
 * @property {string} key The Hypixel API key. Must be a UUID v4 in which all
 *   characters are lowercase.
 */
class HypixelAPIKey {
	static validateRegex =
		/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i;

	key: string;

	constructor(key: string) {
		this.key = key;
	}

	async validate() {
		// Test if the key is a valid UUID v4
		if (!HypixelAPIKey.validateRegex.test(this.key)) {
			return false;
		}

		// Test if the key is valid by checking if it can be used to make a request.

		const response = await axios.get(
			`https://api.hypixel.net/key?key=${this.key}`
		);
		return response.status === 200;
	}
}

export default HypixelAPIKey;
