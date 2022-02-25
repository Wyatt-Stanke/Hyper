import HypixelClientOptions from "../interfaces/HypixelClientOptions";

/**
 * The HypixelClient class is used to communicate with the Hypixel API. It is
 * the base class for all things Hypixel.
 *
 * @class HypixelClient
 * @param {HypixelClientOptions} options The options for the HypixelClient class.
 */
class HypixelClient {
	options: HypixelClientOptions;

	constructor(options: HypixelClientOptions) {
		this.options = options;
	}
}

export default HypixelClient;
