import { execSync } from "child_process";

export function getPhysicalScreenSize() {
  try {
    if (process.platform === "linux") {
      const output = execSync('xrandr | grep " connected"', { encoding: "utf8" });
      const match = output.match(/(\d+)mm x (\d+)mm/);
      if (match) {
        return { w: parseInt(match[1]), h: parseInt(match[2]) };
      }
    }
    ///@ todo implment in linux and mac
  } catch (e) {
    console.warn(e)
  }
  return { w: 0, h: 0 };
}
