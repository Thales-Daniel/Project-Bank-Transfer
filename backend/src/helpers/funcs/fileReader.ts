import fs from "fs"

export const fileReader = (path: any) =>
  fs.readFileSync(path, { encoding: "utf-8" }).trim()
