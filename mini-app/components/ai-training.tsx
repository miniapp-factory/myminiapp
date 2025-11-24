"use client";

import { Button } from "@/components/ui/button";

export default function AITraining() {
  return (
    <section className="w-full max-w-4xl p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">AI Training Mode</h2>
      <p className="text-muted-foreground mb-4">
        Input data, label it, and watch the AI learn from it in real time.
      </p>
      <Button variant="outline">Start Training</Button>
    </section>
  );
}
