import WelcomeBanner from "@/components/WelcomeBanner";
import QuickActions from "@/components/QuickActions";
import { Card } from "@/components/ui/card";
import { currentStudent } from "@/data/mockData";
import { TrendingUp, Target, Flame } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <WelcomeBanner />
        
        <QuickActions />

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="p-6 border-primary/30 bg-gradient-to-br from-card to-primary/5 hover:shadow-lg hover:shadow-primary/20 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Eco Points</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {currentStudent.ecoPoints.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-2">Keep up the great work!</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-secondary/30 bg-gradient-to-br from-card to-secondary/5 hover:shadow-lg hover:shadow-secondary/20 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Challenges Done</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  {currentStudent.challengesCompleted.easy + 
                   currentStudent.challengesCompleted.medium + 
                   currentStudent.challengesCompleted.hard}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {currentStudent.challengesCompleted.hard} hard completed
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Target className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-accent/30 bg-gradient-to-br from-card to-accent/5 hover:shadow-lg hover:shadow-accent/20 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Streak</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                  {currentStudent.streak} days
                </p>
                <p className="text-xs text-muted-foreground mt-2">Don't break the chain!</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Flame className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Achievements */}
        <Card className="p-6 border-accent/30 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold mb-4">Recent Achievements 🏆</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentStudent.badges.map((badge, index) => (
              <div
                key={badge.id}
                className="p-4 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all text-center animate-scale-in group"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {badge.icon}
                </div>
                <p className="text-sm font-semibold">{badge.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(badge.earnedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
