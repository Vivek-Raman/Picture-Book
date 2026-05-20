import { ArrowRight, Images } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Picture Book</CardTitle>
          <CardDescription>
            Your personal library for illustrated stories.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <p className="max-w-prose text-muted-foreground">
            Browse, organize, and enjoy picture books in a calm reading
            environment. Start building your collection or explore what&apos;s
            already on your shelf.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button>
              <Images data-icon="inline-start" />
              Open library
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">
                Learn more
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
