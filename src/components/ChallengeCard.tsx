import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Challenge } from "@/data/mockData";
import { Clock, Award } from "lucide-react";
import { toast } from "sonner";

interface ChallengeCardProps {
  challenge: Challenge;
}

const difficultyColors = {
  easy: "bg-primary/20 text-primary border-primary/50",
  medium: "bg-secondary/20 text-secondary border-secondary/50",
  hard: "bg-accent/20 text-accent border-accent/50"
};

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const handleAccept = () => {
    toast.success(`🌱 You've joined "${challenge.title}"`, {
      description: `Start tracking your progress for the next ${challenge.duration}`,
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-500" />
      
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{challenge.icon}</div>
        <Badge className={difficultyColors[challenge.difficulty]}>
          {challenge.difficulty.toUpperCase()}
        </Badge>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {challenge.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {challenge.description}
      </p>

      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{challenge.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Award className="h-4 w-4 text-accent" />
          <span className="text-accent font-semibold">+{challenge.points} pts</span>
        </div>
      </div>

      <Button 
        onClick={handleAccept}
        className="w-full group-hover:shadow-lg group-hover:shadow-primary/30 transition-all"
      >
        Accept Challenge
      </Button>
    </div>
  );
};

export default ChallengeCard;
