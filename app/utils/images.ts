// utils/images.ts
import fs from "fs";
import path from "path";

export function getImagesFromDirectory(basePath: string) {
  const directory = path.join(process.cwd(), "public", basePath);
  try {
    return fs
      .readdirSync(directory)
      .filter((file) => /\.(jpg|jpeg|png|webp|HEIC)$/i.test(file))
      .map((file) => `/${basePath}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${basePath}:`, error);
    return [];
  }
}
