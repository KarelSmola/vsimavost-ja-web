import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useBackToExercises() {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("exercises");
      if (!el) return;
      const offset = 20;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  }, [navigate]);
}