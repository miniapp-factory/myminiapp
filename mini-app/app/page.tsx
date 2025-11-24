import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import AITraining from "@/components/ai-training";
import GameChallenges from "@/components/game-challenges";
import AIPersonality from "@/components/ai-personality";
import EducationalContent from "@/components/educational-content";
import Multiplayer from "@/components/multiplayer";
import ProgressTracking from "@/components/progress-tracking";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <AITraining />
      <GameChallenges />
      <AIPersonality />
      <EducationalContent />
      <Multiplayer />
      <ProgressTracking />
    </main>
  );
}
