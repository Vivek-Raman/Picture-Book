import { spawn } from "child_process";
import { app } from "electron";
import { join } from "path";

const BINARY_NAME =
  process.platform === "win32" ? "picture-book-cli.exe" : "picture-book-cli";

export interface SidecarResult {
  stdout: string;
  stderr: string;
  exitCode: number | null;
}

export function getSidecarPath(): string {
  if (app.isPackaged) {
    return join(process.resourcesPath, "binaries", BINARY_NAME);
  }

  return join(app.getAppPath(), "src/resources/binaries", BINARY_NAME);
}

export function invokeSidecar(args: string[]): Promise<SidecarResult> {
  const binaryPath = getSidecarPath();

  return new Promise((resolve, reject) => {
    const proc = spawn(binaryPath, args);

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (data: Buffer) => {
      stdout += data.toString();
    });

    proc.stderr.on("data", (data: Buffer) => {
      stderr += data.toString();
    });

    proc.on("error", reject);

    proc.on("close", (exitCode) => {
      resolve({ stdout, stderr, exitCode });
    });
  });
}
