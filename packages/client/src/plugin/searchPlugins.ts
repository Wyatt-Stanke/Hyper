import { readdir } from "node:fs/promises";
import { findUpMultiple } from "find-up";

async function getNodeModulePaths() {
	return findUpMultiple("node_modules", {
		type: "directory"
	});
}

async function getPlugins() {
	const paths = await getNodeModulePaths();
	const pluginContents = await Promise.all(
		paths.map(async (path) => {
			try {
				return await readdir(path + "/@hypermc");
			} catch {
				return [];
			}
		})
	);
	const plugins = pluginContents
		.flat()
		.filter((plugin) => plugin.startsWith("plugin-"))
		.map((plugin) => `@hypermc/${plugin}`);

	return plugins;
}

export default getPlugins;
