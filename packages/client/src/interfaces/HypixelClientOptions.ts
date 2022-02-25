import { HypixelAPIKey } from "@hypermc/api";

/**
 * The options for the HypixelClient class.
 *
 * @property {HypixelAPIKey} apiKey The Hypixel API key to use.
 * @interface HypixelClientOptions
 */
interface HypixelClientOptions {
	apiKey: HypixelAPIKey;
}

export default HypixelClientOptions;
