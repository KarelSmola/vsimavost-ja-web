import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
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
import ExerciseTen from "./pages/ExerciseTen";
import ExerciseEleven from "./pages/ExerciseEleven";
import ExerciseTwelve from "./pages/ExerciseTwelve";
import ExerciseThirteen from "./pages/ExerciseThirteen";
import ExerciseFourteen from "./pages/ExerciseFourteen";
import ExerciseFiveteen from "./pages/ExerciseFiveteen";
import ExerciseSixteen from "./pages/ExerciseSixteen";
import ExerciseSeventeen from "./pages/ExerciseSeventeen";
import ExerciseEighteen from "./pages/ExerciseEighteen";
import ExerciseNineteen from "./pages/ExerciseNineteen";
import ExerciseTwenty from "./pages/ExerciseTwenty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
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
          <Route path="/exercise/10" element={<ExerciseTen />} />
          <Route path="/exercise/11" element={<ExerciseEleven />} />
          <Route path="/exercise/12" element={<ExerciseTwelve />} />
          <Route path="/exercise/13" element={<ExerciseThirteen />} />
          <Route path="/exercise/14" element={<ExerciseFourteen />} />
          <Route path="/exercise/15" element={<ExerciseFiveteen />} />
          <Route path="/exercise/16" element={<ExerciseSixteen />} />
          <Route path="/exercise/17" element={<ExerciseSeventeen />} />
          <Route path="/exercise/18" element={<ExerciseEighteen />} />
          <Route path="/exercise/19" element={<ExerciseNineteen />} />
          <Route path="/exercise/20" element={<ExerciseTwenty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
