import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center border border-border hover:border-gold/50 transition-all duration-300 group"
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      <Sun className={`w-4 h-4 absolute transition-all duration-300 ${
        theme === "light" 
          ? "opacity-100 rotate-0 scale-100" 
          : "opacity-0 rotate-90 scale-0"
      }`} />
      <Moon className={`w-4 h-4 absolute transition-all duration-300 ${
        theme === "dark" 
          ? "opacity-100 rotate-0 scale-100" 
          : "opacity-0 -rotate-90 scale-0"
      }`} />
    </button>
  );
};

export default ThemeToggle;
