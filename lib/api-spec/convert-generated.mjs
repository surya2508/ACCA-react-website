import { readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { transform } from "esbuild";

const generatedDirectories = [
  path.resolve(import.meta.dirname, "../api-client-react/src"),
  path.resolve(import.meta.dirname, "../api-zod/src"),
];

async function findTypeScriptFiles(directory) {
  const files = [];

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findTypeScriptFiles(entryPath)));
    } else if (/\.(tsx?|mts|cts)$/.test(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
}

for (const directory of generatedDirectories) {
  for (const sourcePath of await findTypeScriptFiles(directory)) {
    const source = await readFile(sourcePath, "utf8");
    const extension = path.extname(sourcePath);
    const outputExtension = {
      ".ts": ".js",
      ".tsx": ".jsx",
      ".mts": ".mjs",
      ".cts": ".cjs",
    }[extension];
    const outputPath = sourcePath.slice(0, -extension.length) + outputExtension;
    const { code } = await transform(source, {
      loader: extension.slice(1),
      target: "es2022",
      format: "esm",
    });

    await writeFile(outputPath, code);
    await unlink(sourcePath);
  }
}
