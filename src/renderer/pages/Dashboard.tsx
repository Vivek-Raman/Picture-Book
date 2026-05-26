import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Dashboard() {
  const [msg, setMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleIngest() {
    const result = await window.electronAPI.ingest();
    if (result.canceled) return;

    console.table(result);
    setMsg(result.stdout);
    setErrorMsg(result.stderr);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={handleIngest}>Ingest</Button>
      <pre className="text-xs overflow-scroll text-wrap h-120">{msg}</pre>
      <pre className="text-xs overflow-scroll text-wrap h-120 text-red-950">
        {errorMsg}
      </pre>
    </div>
  );
}
