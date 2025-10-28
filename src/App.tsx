import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExerciseOne from "./pages/ExerciseOne";
import ExerciseTwo from "./pages/ExerciseTwo";
import ExerciseThree from "./pages/ExerciseThree";
import ExerciseFour from "./pages/ExerciseFour";
import ExerciseFive from "./pages/ExerciseFive";
import ExerciseSix from "./pages/ExerciseSix";
import ExerciseSeven from "./pages/ExerciseSeven";
import ExerciseEight from "./pages/ExerciseEight";
import ExerciseNine from "./pages/ExerciseNine";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/exercise/01" element={<ExerciseOne />} />
          <Route path="/exercise/02" element={<ExerciseTwo />} />
          <Route path="/exercise/03" element={<ExerciseThree />} />
          <Route path="/exercise/04" element={<ExerciseFour />} />
          <Route path="/exercise/05" element={<ExerciseFive />} />
          <Route path="/exercise/06" element={<ExerciseSix />} />
          <Route path="/exercise/07" element={<ExerciseSeven />} />
          <Route path="/exercise/08" element={<ExerciseEight />} />
          <Route path="/exercise/09" element={<ExerciseNine />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
