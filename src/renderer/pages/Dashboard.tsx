import { Button } from "@/components/ui/button";

export default function Dashboard() {
  async function handleIngest() {
    const result = await window.electronAPI.ingest();
    if (result.canceled) return;

    console.log(result.stdout.trim());
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button onClick={handleIngest}>Ingest</Button>
    </div>
  );
}
