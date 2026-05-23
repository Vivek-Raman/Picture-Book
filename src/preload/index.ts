import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  invokeSidecar: (args: string[]) =>
    ipcRenderer.invoke("sidecar:invoke", args) as Promise<{
      stdout: string;
      stderr: string;
      exitCode: number | null;
    }>,
  ingest: () =>
    ipcRenderer.invoke("ingest") as Promise<
      | { canceled: true }
      | {
          canceled: false;
          directory: string;
          stdout: string;
          stderr: string;
          exitCode: number | null;
        }
    >,
});
