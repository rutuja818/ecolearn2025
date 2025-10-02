import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket, Gamepad2, Trophy, BookOpen } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      to: "/challenges",
      icon: Rocket,
      label: "Start Your Journey",
      description: "Accept new eco-challenges",
      gradient: "from-primary to-primary/70"
    },
    {
      to: "/learn",
      icon: Gamepad2,
      label: "Play Games",
      description: "Learn through fun activities",
      gradient: "from-secondary to-secondary/70"
    },
    {
      to: "/profile",
      icon: Trophy,
      label: "View Profile",
      description: "Track your achievements",
      gradient: "from-accent to-accent/70"
    },
    {
      to: "/leaderboard",
      icon: Trophy,
      label: "Leaderboard",
      description: "See your ranking",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <Link key={action.to} to={action.to}>
            <div 
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{action.label}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;
