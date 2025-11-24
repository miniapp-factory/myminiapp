"use client";

import { Button } from "@/components/ui/button";

export default function AIPersonality() {
  return (
    <section className="w-full max-w-4xl p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">AI Personality Customization</h2>
      <p className="text-muted-foreground mb-4">
        Create and customize AI characters with different learning styles and behaviors.
      </p>
      <Button variant="outline">Customize AI</Button>
    </section>
  );
}
