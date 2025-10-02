import { currentStudent } from "@/data/mockData";
import { Sparkles } from "lucide-react";

const WelcomeBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 p-8 border border-primary/30 animate-fade-in">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl animate-leaf-float" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary rounded-full blur-3xl animate-leaf-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-accent animate-glow-pulse" />
          <span className="text-sm font-medium text-muted-foreground">Welcome back</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {currentStudent.name} 👋
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Mentored by <span className="text-primary font-semibold">{currentStudent.mentor}</span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
