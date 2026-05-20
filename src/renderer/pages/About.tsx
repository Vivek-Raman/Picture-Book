import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stack = [
  "Electron",
  "React",
  "Vite",
  "React Router",
  "Tailwind CSS v4",
  "shadcn/ui",
];

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About</CardTitle>
        <CardDescription>
          A desktop app for reading and managing picture books.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <p className="max-w-prose text-muted-foreground">
          Picture Book is built as a native desktop experience using web
          technologies — fast to develop, easy to extend, and designed to feel
          at home on your machine.
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">Built with</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
