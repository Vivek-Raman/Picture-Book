export {};

declare global {
  interface Window {
    electronAPI: {
      ingest: () => Promise<
        | { canceled: true }
        | {
            canceled: false;
            directory: string;
            stdout: string;
            stderr: string;
            exitCode: number | null;
          }
      >;
    };
  }
}
