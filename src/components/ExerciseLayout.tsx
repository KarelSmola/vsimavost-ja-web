import { BackHeader } from "./BackHeader";

export function ExerciseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <BackHeader />
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
}