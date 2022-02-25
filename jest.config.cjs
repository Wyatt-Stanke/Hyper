module.exports = {
	transform: {
		"^.+\\.(t|j)sx?$": [
			"@swc/jest",
			{
				jsc: {
					parser: {
						syntax: "typescript"
					},
					target: "es5",
					externalHelpers: false
				},
				module: {
					type: "commonjs"
				}
			}
		]
	},
	globalSetup: "../../jest.setup.js",
	extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx", ".json", ".node"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
