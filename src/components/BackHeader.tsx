import { ArrowLeft } from "lucide-react";
import { useBackToExercises } from "@/hooks/useBackToExercises";

export function BackHeader() {
  const handleBackClick = useBackToExercises();
  return (
    <header className="border-b border-border">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 font-inter text-sm font-light hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          Zpět na přehled cvičení
        </button>
      </div>
    </header>
  );
}