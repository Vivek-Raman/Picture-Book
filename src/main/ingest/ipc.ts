import { BrowserWindow, dialog, ipcMain } from "electron";
import { invokeSidecar } from "../lib/sidecar";

ipcMain.handle("ingest", async (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);
  const { canceled, filePaths } = await dialog.showOpenDialog(window!, {
    properties: ["openDirectory"],
  });

  if (canceled || filePaths.length === 0) {
    return { canceled: true as const };
  }

  const result = await invokeSidecar(["ingest", filePaths[0]]);
  return { canceled: false as const, directory: filePaths[0], ...result };
});
