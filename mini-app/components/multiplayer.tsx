"use client";

import { Button } from "@/components/ui/button";

export default function Multiplayer() {
  return (
    <section className="w-full max-4xl p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Multiplayer Mode</h2>
      <p className="text-muted-foreground mb-4">
        Play together, train AI collaboratively, or compete in AI-based challenges.
      </p>
      <Button variant="outline">Join Multiplayer</Button>
    </section>
  );
}
