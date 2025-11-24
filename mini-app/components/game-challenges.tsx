"use client";

import { Button } from "@/components/ui/button";

export default function GameChallenges() {
  return (
    <section className="w-full max-w-4xl p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Game Challenges</h2>
      <p className="text-muted-foreground mb-4">
        Compete or collaborate to train AI to solve puzzles and recognize patterns.
      </p>
      <Button variant="outline">Start Challenge</Button>
    </section>
  );
}
